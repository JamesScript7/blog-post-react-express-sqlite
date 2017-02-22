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

		e.target.title.value = "";
		e.target.body.value = "";
	}
	
	render() {
		return (
			<div className="blog-form">
				
				<h2>Start a New Post:</h2>

				<form onSubmit={this.onSubmit}>

					<label className="title">Title: </label>
					<input type="text" name="title" /> <br/>

					<label className="body">Body: </label>
					<input type="text" name="body" /> <br />

					<input type="submit" value="Submit" />
				</form>

			</div>
			);
	}
}

export default BlogForm;