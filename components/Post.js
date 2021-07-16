/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ThumbUpIcon as ThumbFill } from "@heroicons/react/solid";

const Post = ({ name, message, email, postImage, image, timestamp }) => {
	const [like, setLike] = useState(false);

	const toggleLike = async (value) => {
		value = !value;
		setLike(value);
	};

	return (
		<div className="flex flex-col mb-1">
			<div className="p-5 pb-2 bg-white dark:bg-post-gray mt-5 rounded-t-2xl shadow-sm">
				<div className="flex items-center space-x-2">
					<img
						src={image}
						alt=""
						className="rounded-full"
						width={40}
						height={40}
					/>
					<div>
						<p>{name}</p>
						<p className="text-xs text-gray-400">
							{timestamp
								? new Date(
										timestamp?.toDate()
								  ).toLocaleDateString()
								: "Loading..."}
						</p>
					</div>
				</div>

				<p className="pt-4">{message}</p>
			</div>

			{postImage && (
				<div className="relative h-56 md:h-96 bg-white dark:bg-post-gray">
					<Image
						src={postImage}
						objectFit="cover"
						layout="fill"
						alt=""
					/>
				</div>
			)}

			{/** Footer of post */}
			<div className="bg-white dark:bg-post-gray rounded-b-2xl">
				{like && (
					<div className="flex items-center mt-2 ml-3 space-x-1">
						<div className="h-5 w-5 flex justify-center items-center rounded-full bg-blue-500">
							<ThumbFill className="h-3 text-white dark:text-text-color" />
						</div>
						<p className="text-xs sm:text-base text-gray-400">1</p>
					</div>
				)}
				<div
					className="flex justify-between items-center rounded-b-2xl bg-white 
			shadow-md dark:bg-post-gray text-gray-400 border-t dark:border-gray-400 mt-2"
				>
					<div
						className="inputIcon rounded-none rounded-bl-2xl"
						onClick={() => toggleLike(like)}
					>
						{like ? (
							<ThumbFill className="h-6 text-blue-600" />
						) : (
							<ThumbUpIcon className="h-6" />
						)}
						<p
							className={`text-xs sm:text-base ${
								like && "text-blue-600"
							}`}
						>
							Like
						</p>
					</div>
					<div className="inputIcon rounded-none">
						<ChatAltIcon className="h-6" />
						<p className="text-xs sm:text-base">Comment</p>
					</div>
					<div className="inputIcon rounded-none rounded-br-2xl">
						<ShareIcon className="h-6" />
						<p className="text-xs sm:text-base">Share</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
