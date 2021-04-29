import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import PostItem from "./post-item";
import PageHeader from "../../common/page-header";
import { fetchPosts } from "../../../store/posts/postsActions";

const PostsPage = ({ fetchPosts, userId }) => {
	const [posts, setPosts] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);
	const [isSorted, setIsSorted] = useState(true);

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
