import React, { Component } from "react";

class Home extends Component {
	state = {
		name: ""
	};

	handleClick = () => {
		this.props.route("resume", this.state.name);
	};

	handleChange = e => {
		this.setState({
			name: e.target.value
		});
	};

	render() {
		let { name } = this.state;
		return (
			<div className="home-view">
				<div className="header-image">
					<div className="title-bar">
						<h2 id="app-name">Rezez</h2>
						<h4>
							resume builder by
							<a
								target="_blank"
								href="https://alienblogger.github.io/sidgel-profile"
							>
								{" "}AlienBlogger
							</a>
						</h4>
					</div>
					<input
						id="name"
						placeholder="Enter Your Name "
						onChange={this.handleChange}
					/>
					<div onClick={this.handleClick} className="button">
						Create Resume
					</div>
				</div>
				<div className="cards">
					<div className="card">
						<div className="card-image">
							<i className="im im-globe" />
						</div>
						<div className="card-label">Online</div>
					</div>
					<div className="card">
						<div className="card-image">
							<i className="im im-gear" />
						</div>
						<div className="card-label">Simple</div>
					</div>
					<div className="card">
						<div className="card-image">
							<i className="im im-coin" />
						</div>
						<div className="card-label">Free</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
