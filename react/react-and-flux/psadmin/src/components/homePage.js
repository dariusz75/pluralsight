'use strict';

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Home</h1>
				<h2>Pluralsight Administration</h2>
				<p>ReactJS, React Router and Flux web application. </p>
			</div>
			);
	}
});

module.exports = Home;