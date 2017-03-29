
$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

var selector = document.getElementById('app');

var App = React.createClass({
	render: function() {
		var Child;

		switch(this.props.route) {
			case 'about' : Child = About;
			break;
			default: Child = Home;
		}

		return (
			<div>
			<Child />
			</div>
			);
	}
});

function render() {
	var route = window.location.hash.substr(1);
	React.render(<App route={route} />, selector);
}

window.addEventListener('hashchange', render);
render();

React.render(<Home />, selector);