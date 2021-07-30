import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";
import {
	ChevronDownIcon,
	ShoppingBagIcon,
	UserGroupIcon,
} from "@heroicons/react/outline";
import {
	CalendarIcon,
	ClockIcon,
	BookmarkIcon,
	BriefcaseIcon,
	FlagIcon,
	DesktopComputerIcon,
	UsersIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
	const [session, loading] = useSession();

	return (
		<div className="p-2 hidden md:block sticky h-screen top-16 scrollbar-hide max-w-[300px] xl:min-w-[300px] overflow-y-scroll pt-3">
			<div>
				<SidebarRow
					src={session.user.image}
					title={session.user.name}
				/>
				<SidebarRow Icon={UsersIcon} title="Friends" />
				<SidebarRow Icon={UserGroupIcon} title="Groups" />
				<SidebarRow Icon={DesktopComputerIcon} title="Match" />
				<SidebarRow Icon={CalendarIcon} title="Events" />
				<SidebarRow Icon={ClockIcon} title="Memories" />
				<SidebarRow Icon={BookmarkIcon} title="Saved" />
				<SidebarRow Icon={FlagIcon} title="Pages" />
				<SidebarRow Icon={ChevronDownIcon} title="See More" />
			</div>
		</div>
	);
};

export default Sidebar;
