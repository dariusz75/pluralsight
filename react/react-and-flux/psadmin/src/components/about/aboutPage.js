'use strict';

var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>About</h1>
				<p>
					This application using following technologies:
					<ul>
						<li>ReactJS</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node.js</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
			);
	}
});

module.exports = About;