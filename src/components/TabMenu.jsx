/* eslint-disable react/prop-types */
const TabMenu = ({ name, activeTab, setActiveTab }) => {
	const handleClick = (tabIndex) => {
		setActiveTab(tabIndex);
	};
	return (
		<>
			<div
				className="flex items-center justify-between border-b border-slate-800 px-6
			md:col-start-2 md:row-start-2 md:flex-col 
			md:items-stretch md:justify-normal md:px-[39px] md:border-none xl:max-w-[400px] xl:px-0"
			>
				<button
					className={`uppercase font-bold tracking-[1.93px] inline-block ${
						activeTab === 0
							? `border-b-4 ${name}-border text-white md:border-none ${name}-bg`
							: "text-white/75 md:border md:border-slate-700 md:hover:bg-[#d8d8d8]/20"
					} py-3 focus:outline-none md:flex md:px-5 md:items-center `}
					onClick={() => handleClick(0)}
					aria-selected={activeTab === 0 ? "true" : "false"}
					aria-controls="tab-content-0"
					id="tab-0"
					role="tab"
					tabIndex={activeTab === 0 ? "0" : "-1"}
				>
					<p className="hidden md:block md:mr-[17px] md:text-white/50 md:font-bold">
						01
					</p>{" "}
					<p>Overview</p>
				</button>
				<button
					className={`uppercase font-bold tracking-[1.93px] inline-block ${
						activeTab === 1
							? `border-b-4 ${name}-border text-white ${name}-bg`
							: "text-white/75 md:border md:border-slate-700 md:hover:bg-[#d8d8d8]/20"
					} py-3 focus:outline-none md:flex md:my-4 md:items-center md:px-5`}
					onClick={() => handleClick(1)}
					aria-selected={activeTab === 1 ? "true" : "false"}
					aria-controls="tab-content-1"
					id="tab-1"
					role="tab"
					tabIndex={activeTab === 1 ? "0" : "-1"}
				>
					<span className="hidden md:inline-block md:mr-[17px] md:text-white/50 md:font-bold">
						02
					</span>{" "}
					Structure
				</button>
				<button
					className={`uppercase font-bold tracking-[1.93px] inline-block ${
						activeTab === 2
							? `border-b-4 ${name}-border text-white ${name}-bg`
							: "text-white/75 md:border md:border-slate-700 md:hover:bg-[#d8d8d8]/20"
					} py-3 focus:outline-none md:flex md:items-center md:px-5`}
					onClick={() => handleClick(2)}
					aria-selected={activeTab === 2 ? "true" : "false"}
					aria-controls="tab-content-1"
					id="tab-1"
					role="tab"
					tabIndex={activeTab === 2 ? "0" : "-1"}
				>
					<span className="hidden md:inline-block md:mr-[17px] md:text-white/50 md:font-bold">
						03
					</span>{" "}
					Surface
				</button>
			</div>
		</>
	);
};

export default TabMenu;
