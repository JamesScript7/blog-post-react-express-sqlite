import React, { Component } from 'react';

class BlogForm extends Component {
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		let post = {
			"title": e.target.title.value,
			"body": e.target.body.value
		}

		this.props.addPost(post);
	}
	
	render() {
		return (
			<div className="blog-form">
				<h2>Start a new post:</h2>
				<form id="submitForm" onSubmit={this.onSubmit}>
					<label>Title:</label>
					<input id="title" type="text" name="title" /> <br/>
					<label>Body:</label>
					<input id="body" type="text" name="body" /> <br />
					<input type="submit" value="Submit" />
				</form>
			</div>
			);
	}
}

export default BlogForm;