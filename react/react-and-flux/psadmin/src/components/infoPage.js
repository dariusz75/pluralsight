'use strict';

var React = require('react');

var Info = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Info</h1>
				<h2>This is Info Page</h2>
				<p>ReactJS, React Router and Flux web application. </p>
			</div>
			);
	}
});

module.exports = Info;