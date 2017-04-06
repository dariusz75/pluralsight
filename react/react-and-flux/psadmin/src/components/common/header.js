'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">LOGO</a>
					<ul className="nav navbar-nav">
						<li><Link to="app">HOME</Link></li>
						<li><Link to="about">ABOUT</Link></li>
						<li><Link to="authors">AUTHORS</Link></li>
						<li><Link to="info">INFO</Link></li>
						<li><Link to="contact">CONTACT</Link></li>
					</ul>
				</div>
			</nav>
			);
	}
});

module.exports = Header;