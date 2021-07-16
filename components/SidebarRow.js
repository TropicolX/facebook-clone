import Image from "next/image";

const SidebarRow = ({ src, Icon, title }) => {
	return (
		<div className="hidden lg:flex items-center space-x-2 p-4 hover:bg-gray-200 dark:hover:bg-icon-gray rounded-xl cursor-pointer">
			{src && (
				<Image
					className="rounded-full"
					src={src}
					width={30}
					height={30}
					layout="fixed"
					alt=""
				/>
			)}
			{Icon && <Icon className="h-6 w-6 text-blue-500" />}
			<p className="hidden xl:inline-flex font-medium">{title}</p>
		</div>
	);
};

export default SidebarRow;
