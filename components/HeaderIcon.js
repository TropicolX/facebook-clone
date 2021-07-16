const HeaderIcon = ({ Icon, active }) => {
	return (
		<div className="header-icon">
			<Icon
				className={`h-7 text-gray-500 dark:text-header-icon-gray ${
					active && "text-blue-500"
				}`}
			/>
		</div>
	);
};

export default HeaderIcon;
