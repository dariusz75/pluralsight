'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Page not found!</h1>
				<p>Woops, Sorry!!!</p>
				<p><Link to="app">Back to Home Page</Link></p>
			</div>
			);
	}
});

module.exports = NotFoundPage;