import React, { useState } from "react";
import PageHeader from "../../common/page-header";

const PostsPage = () => {
	const [posts, setPosts] = useState(null);
	const [isFiltered, setIsFiltered] = useState(false);
	const [isSorted, setIsSorted] = useState(true);

	useEffect(() => {
		fetchPosts();
	}, []);

	return <PageHeader title='Posts Page' desc='Here You can view all posts' />;
};

export default connect(mapStateToProps, { fetchPosts })(PostsPage);
