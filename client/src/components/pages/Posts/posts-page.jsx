import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import PostItem from "./post-item";
import PageHeader from "../../common/page-header";
import SortFilterButton from "./sort-filter-button";

import { fetchPosts } from "../../../store/posts/postsActions";

const PostsPage = ({ fetchPosts, userId }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const post = await fetchPosts();
			setPosts(post);
		}
		fetchData();
	}, [fetchPosts]);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-12'>
					<PageHeader title='Posts Page' desc='Here You can view all posts' />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-4 m-auto text-center'>
					<Link className='btn btn-success px-5 mt-5' to='/user/add-post'>
						<i className='fas fa-plus-circle mx-1'></i> Add Post
					</Link>
				</div>
				<div className='col-md-4 mr-auto'>
					<SortFilterButton posts={posts} setPosts={setPosts} />
				</div>
			</div>
			{posts?.length > 0 && (
				<div className='row mt-5'>
					<div className='col-lg-12'>
						{posts.map((post) => (
							<PostItem
								posts={posts}
								setPosts={setPosts}
								userId={userId}
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
	userId: state.user.user_id,
});
export default connect(mapStateToProps, { fetchPosts })(PostsPage);
