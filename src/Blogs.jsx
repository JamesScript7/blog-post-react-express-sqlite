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

				this.posts.push(res.data);

				this.setState({
					post: this.posts
				})
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
				

			</div>
			);
	}
}

export default Status;