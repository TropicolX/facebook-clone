const HeaderIcon = ({ Icon, active }) => {
	return (
		<div className="header-icon">
			<Icon
				className={`h-7 text-gray-500 ${
					active ? "text-blue-500" : "dark:text-header-icon-gray"
				}`}
			/>
		</div>
	);
};

export default HeaderIcon;
