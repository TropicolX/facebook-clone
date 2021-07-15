/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
	return (
		<div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-52 lg:w-32 cursor-pointer overflow-x p-3 mt-2 transition-200 transform ease-in hover:scale-105 hover:animate-pulse">
			<img
				className="absolute opacity-0 lg:opacity-100 
                rounded-full z-50 h-10 w-10 border-4 border-blue-600 object-cover"
				src={profile}
				width={40}
				height={40}
				layout="fixed"
				alt=""
			/>
			<Image
				className="object-cover filter brightness-75 
                rounded-full lg:rounded-3xl"
				src={src}
				layout="fill"
				alt=""
			/>
		</div>
	);
};

export default StoryCard;
