import React, { Component } from 'react';
import BlogForm from './BlogForm.jsx';
import axios from 'axios';
import './styles.css';

class Status extends Component {
	constructor(props){
		super(props);

			this.posts = [];

			this.state = {
				post: this.posts
			}

			this.addPost = this.addPost.bind(this);
			this.editPost = this.editPost.bind(this);
			this.deletePost = this.deletePost.bind(this);
	}

	addPost(newPost) {

		axios.post('http://localhost:9000/submitForm', {
			title: newPost.title,
			body: newPost.body
		})
			.then(res => {

				this.posts.push(res.data);

				this.setState({
					post: this.posts
				})
			})

	}

	editPost() {
		axios.get('http://localhost:9000/editPost', {
			
		})
	}

	deletePost() {
		axios.delete('http://localhost:9000/deletePost', {

		})
	}

	componentDidMount() {

		axios.get('http://localhost:9000/getAll')
			.then(res => {
				this.posts = res.data.post
				
				this.setState({
					post: this.posts
				})
			})

	}

	render() {
		return (
			<div className="blogs">
				
				<BlogForm addPost={this.addPost}/>

				<div className="container">
					{
						this.state.post.map( (post,i) => {
							return (
								<div className="posts" key={"item-" + (i + 1)}>
									<h1>{post.title}</h1>
									<p>Date: {post.createdAt}</p>
									<hr />
									<p>{post.body}</p>

									<div className="btn">
										<button onClick={this.editPost}>Edit</button>
										<button onClick={this.deletePost}>Delete</button>
									</div>

								</div>)
						}).reverse()
		 		  }

				</div>

			</div>
			);
	}
}

export default Status;