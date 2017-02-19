import React, { Component } from 'react';
import BlogForm from './BlogForm.jsx';
import axios from 'axios';

class Status extends Component {
	constructor(props){
		super(props);

			this.posts = [];

			this.state = {
				post: this.posts
			}

			this.addPost = this.addPost.bind(this);
	}

	addPost(newPost) {

		axios.post('http://localhost:9000/submitForm', {
			title: newPost.title,
			body: newPost.body
		})
			.then(res => {

				let data = {
					"title": res.data.title,
					"body": res.data.body
				}

				this.posts.push(data);

				this.setState({
					post: this.posts
				})
			})

	}

	render() {
		return (
			<div className="blogs">
				

				<div>
					{
						this.state.post.map( (post,i) => {
							return (
								<div key={"item-" + (i + 1)}>
									<h1>{post.title}</h1>
									<p>{post.body}</p>
								</div>)
						}).reverse()
		 		  }

				</div>
				
				<BlogForm addPost={this.addPost}/>

			</div>
			);
	}
}

export default Status;