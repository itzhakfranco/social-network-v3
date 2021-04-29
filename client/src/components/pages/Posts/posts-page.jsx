import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import PostItem from "./post-item";
import PageHeader from "../../common/page-header";
import { fetchPosts } from "../../../store/posts/postsActions";

const PostsPage = ({ fetchPosts, posts }) => {
	const [isFiltered, setIsFiltered] = useState(false);
	const [isSorted, setIsSorted] = useState(true);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-12'>
					<PageHeader title='Posts Page' desc='Here You can view all posts' />
				</div>
			</div>
			{posts?.length > 0 && (
				<div className='row mt-5'>
					<div className='col-lg-12'>
						{posts.map((post) => (
							<PostItem
								//handlePostDelete={this.handlePostDelete}
								key={post._id}
								post={post}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
const mapStateToProps = (state) => ({
	posts: state.posts.posts,
});
export default connect(mapStateToProps, { fetchPosts })(PostsPage);
