'use strict';

var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">LOGO</a>
					<ul className="nav navbar-nav">
						<li><a href="/">HOME</a></li>
						<li><a href="/#about">ABOUT</a></li>
					</ul>
				</div>
			</nav>
			);
	}
});

module.exports = Header;