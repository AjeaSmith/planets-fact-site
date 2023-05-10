/* eslint-disable react/prop-types */
const TabMenu = ({ name, activeTab, setActiveTab }) => {
	const handleClick = (tabIndex) => {
		setActiveTab(tabIndex);
	};
	return (
		<>
			<div className="flex items-center justify-between border-b border-slate-800 px-6">
				<button
					className={`tracking-[1.93px] inline-block ${
						activeTab === 0
							? `border-b-4 ${name}-border text-white`
							: "text-white/75"
					} py-3 focus:outline-none`}
					onClick={() => handleClick(0)}
					aria-selected={activeTab === 0 ? "true" : "false"}
					aria-controls="tab-content-0"
					id="tab-0"
					role="tab"
					tabIndex={activeTab === 0 ? "0" : "-1"}
				>
					Overview
				</button>
				<button
					className={`tracking-[1.93px] inline-block ${
						activeTab === 1
							? `border-b-4 ${name}-border text-white`
							: "text-white/75"
					} py-3 focus:outline-none`}
					onClick={() => handleClick(1)}
					aria-selected={activeTab === 1 ? "true" : "false"}
					aria-controls="tab-content-1"
					id="tab-1"
					role="tab"
					tabIndex={activeTab === 1 ? "0" : "-1"}
				>
					Structure
				</button>
				<button
					className={`tracking-[1.93px] inline-block ${
						activeTab === 2
							? `border-b-4 ${name}-border text-white`
							: "text-white/75"
					} py-3 focus:outline-none`}
					onClick={() => handleClick(2)}
					aria-selected={activeTab === 2 ? "true" : "false"}
					aria-controls="tab-content-1"
					id="tab-1"
					role="tab"
					tabIndex={activeTab === 2 ? "0" : "-1"}
				>
					Surface
				</button>
			</div>
		</>
	);
};

export default TabMenu;
