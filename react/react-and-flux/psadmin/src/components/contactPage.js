'use strict';

var React = require('react');

var Contact = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Contact</h1>
				<h2>This is Contact Page</h2>
				<p>ReactJS, React Router and Flux web application. </p>
			</div>
			);
	}
});

module.exports = Contact;