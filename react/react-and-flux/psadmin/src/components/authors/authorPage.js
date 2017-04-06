"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var Router = require('react-router');
var Link = Router.Link;

var Authors = React.createClass({
	getInitialState: function() {
		return 	{
							authors: []
						};
			
	},

	componentWillMount: function() {
		this.setState({ authors: AuthorApi.getAllAuthors() });
	},

	render: function() {

		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td><a href={"/#authors/" + author.id}>{author.id}</a></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};

		return (
				<div className="jumbotron">
					<h1>Authors</h1>
					<Link to="addAuthor" className="btn btn-default">Add Author</Link>
					<table className="table">
						<thead>
							<th>ID</th>
							<th>Name</th>
						</thead>
						<tbody>
						</tbody>
							{this.state.authors.map(createAuthorRow, this)}
					</table>
				</div>
			);
	}
});

module.exports = Authors;