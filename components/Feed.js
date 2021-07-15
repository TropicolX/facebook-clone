import Stories from "../components/Stories";
import InputBox from "../components/InputBox";
import Posts from "../components/Posts";

const Feed = ({ posts }) => {
	return (
		<div className="flex-grow lg:h-screen overscroll-contain mb-22 mr-4 xl:mr-4 overflow-y-auto scrollbar-hide pt-3">
			<div className="mx-auto items-center justify-center max-w-md md:max-w-lg lg:max-w-xl">
				<Stories />
				<InputBox />
				<Posts posts={posts} />
			</div>
		</div>
	);
};

export default Feed;
