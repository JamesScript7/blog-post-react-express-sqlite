import React, { Component } from 'react';
import BlogForm from './BlogForm.jsx';


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
		axios.get()

		this.posts.push(newPost);
		
		this.setState({
			post: this.posts
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