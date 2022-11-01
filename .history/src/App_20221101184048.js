import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "./actions";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="container">
						<div style={{ marginBottom: "15px" }}>
							<button
								onClick={this.onDecrement.bind(this)}
								style={{ marginRight: "15px" }}
								type="button"
								className="btn btn-info"
							>
								Giảm
							</button>
							<button
								onClick={this.onIncrement.bind(this)}
								type="button"
								className="btn btn-info"
							>
								Tăng
							</button>
						</div>
						<div>
							Counts: <span>{this.props.times}</span>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

App.propTypes = {};

export default App;
