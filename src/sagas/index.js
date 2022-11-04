import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as actions from '../actions';
import { selectedRedditSelector, postsByRedditSelector } from '../reducers/selectors';
// fetch API thong thuong
export function fetchPostsApi(reddit) {
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then((response) => response.json())
    .then((json) => json.data.children.map((child) => child.data));
}
// lay thanh cong api va thay doi store
export function* fetchPosts(reddit) {
  yield put(actions.requestPosts(reddit));
  // call co the goi ham tao || ham thong thuong
  // <=> fetchPostsApi(reddit)
  // goi data thanh cong tu API
  const posts = yield call(fetchPostsApi, reddit);
  // sau do thay doi state de truyen den view
  // non-blocking
  // dispatch action với payload được thay đổi
  yield put(actions.receivePosts(reddit, posts));
}
// lai tiep tuc lam thay doi action truoc khi thay doi store
export function* invalidateReddit() {
  while (true) {
    // take lam thay doi action 
    const { reddit } = yield take(actions.INVALIDATE_REDDIT);
    // tuong duong goi fetchPosts(reddit)
    // call khac fork la blocking, ham fn co the la ham thong thuong
    yield call(fetchPosts, reddit);
  }
}

export function* nextRedditChange() {
  while (true) {
    const prevReddit = yield select(selectedRedditSelector);
    yield take(actions.SELECT_REDDIT);
    const newReddit = yield select(selectedRedditSelector);
    const postsByReddit = yield select(postsByRedditSelector);
    if (prevReddit !== newReddit && !postsByReddit[newReddit]) yield fork(fetchPosts, newReddit);
  }
}

export function* startup() {
  const selectedReddit = yield select(selectedRedditSelector);
  // fork la non-blocking
  yield fork(fetchPosts, selectedReddit);
}

export default function* root() {
  yield fork(startup);
  yield fork(nextRedditChange);
  yield fork(invalidateReddit);
}
