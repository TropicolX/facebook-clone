import Image from "next/image";
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
} from "@heroicons/react/solid";
import {
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
	PuzzleIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

const Header = () => {
	const [session] = useSession();

	return (
		<div className="sticky top-0 z-50 bg-white flex items-center justify-between p-2 lg:p-3 shadow-md">
			{/** left */}
			<div className="flex items-center">
				<Image
					src="https://links.papareact.com/5me"
					alt=""
					width={40}
					height={40}
					layout="fixed"
				/>
				<div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 xl:pr-6">
					<SearchIcon className="h-6 text-gray-600" />
					<input
						className="hidden lg:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
						type="text"
						placeholder="Search Facebook"
					/>
				</div>
			</div>

			{/** Center */}
			<div className="hidden md:flex md:ml-24 lg:ml-8 justify-center flex-grow">
				<div className="flex xl:space-x-6 md:space-x-0">
					<HeaderIcon active Icon={HomeIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
					<HeaderIcon Icon={PuzzleIcon} />
					{/**<HeaderIcon Icon={ShoppingCartIcon} /> */}
				</div>
			</div>

			{/** Right */}
			<div>
				<div className="flex items-center sm:space-x-2 justify-end">
					{/** Profile pic */}
					<Image
						onClick={() => signOut()}
						className="rounded-full cursor-pointer"
						src={session.user.image}
						width="40"
						height="40"
						layout="fixed"
						alt=""
					/>
					<p className="hidden xl:flex whitespace-nowrap font-semibold pr-3">
						{session.user.name}
					</p>
					<ViewGridIcon className="icon" />
					<ChatIcon className="icon" />
					<BellIcon className="icon" />
					<ChevronDownIcon className="icon" />
				</div>
			</div>
		</div>
	);
};

export default Header;
