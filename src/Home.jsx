import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import data from "./data.json";

const Home = () => {
	const [searchParams] = useSearchParams();
	const [activeTab, setActiveTab] = useState(0);
	const planet = searchParams.get("name");

	const filteredPlanets = data.filter((item) => item.name === planet);

	const handleClick = (tabIndex) => {
		setActiveTab(tabIndex);
	};
	return (
		<>
			<div className="flex justify-center flex-col">
				<div className="flex items-center justify-between border-b border-slate-800 px-6">
					<p
						className={`inline-block ${
							activeTab === 0
								? "border-b-4 border-[#419EBB] text-white"
								: "text-white/75"
						} py-2 focus:outline-none`}
						onClick={() => handleClick(0)}
						aria-selected={activeTab === 0 ? "true" : "false"}
						aria-controls="tab-content-0"
						id="tab-0"
						role="tab"
						tabIndex={activeTab === 0 ? "0" : "-1"}
					>
						Overview
					</p>
					<p
						className={`inline-block ${
							activeTab === 1
								? "border-b-4 border-[#419EBB] text-white"
								: "text-white/75"
						} py-2 focus:outline-none`}
						onClick={() => handleClick(1)}
						aria-selected={activeTab === 1 ? "true" : "false"}
						aria-controls="tab-content-1"
						id="tab-1"
						role="tab"
						tabIndex={activeTab === 1 ? "0" : "-1"}
					>
						Structure
					</p>
					<p
						className={`inline-block ${
							activeTab === 2
								? "border-b-4 border-[#419EBB] text-white"
								: "text-white/75"
						} py-2 focus:outline-none`}
						onClick={() => handleClick(2)}
						aria-selected={activeTab === 2 ? "true" : "false"}
						aria-controls="tab-content-1"
						id="tab-1"
						role="tab"
						tabIndex={activeTab === 2 ? "0" : "-1"}
					>
						Surface
					</p>
				</div>
				<div key={planet.name} className="mt-4">
					<div
						id="tab-content-0"
						role="tabpanel"
						aria-labelledby="tab-0"
						tabIndex={activeTab === 0 ? "0" : "-1"}
						className={`${activeTab === 0 ? "block" : "hidden"}`}
					>
						{filteredPlanets.map((d) => {
							return <p key={d.name}>{d.overview.content}</p>;
						})}
					</div>
					<div
						id="tab-content-1"
						role="tabpanel"
						aria-labelledby="tab-1"
						tabIndex={activeTab === 1 ? "0" : "-1"}
						className={`${activeTab === 1 ? "block" : "hidden"}`}
					>
						{filteredPlanets.map((d) => {
							return <p key={d.name}>{d.structure.content}</p>;
						})}
					</div>
					<div
						id="tab-content-2"
						role="tabpanel"
						aria-labelledby="tab-2"
						tabIndex={activeTab === 2 ? "0" : "-1"}
						className={`${activeTab === 2 ? "block" : "hidden"}`}
					>
						{filteredPlanets.map((d) => {
							return <p key={d.name}>{d.geology.content}</p>;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
