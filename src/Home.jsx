import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import data from "./data.json";

const Home = () => {
	const [searchParams] = useSearchParams();
	const [planetsData, setPlanetsData] = useState([]);
	const [activeTab, setActiveTab] = useState(0);
	const planet = searchParams.get("planet");

	// const filteredPlanets = planetsData.filter((item) => item.name === planet);

	useEffect(() => {
		setPlanetsData(data);
	}, []);

	const handleClick = (tabIndex) => {
		setActiveTab(tabIndex);
	};
	return (
		<>
			<div className="flex justify-center flex-col">
				<div className="flex items-center justify-between border-b border-slate-800 px-6">
					<button
						className={`tracking-[1.93px] inline-block ${
							activeTab === 0
								? `border-b-4 ${planet}-border text-white`
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
					</button>
					<button
						className={`tracking-[1.93px] inline-block ${
							activeTab === 1
								? `border-b-4 ${planet}-border text-white`
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
					</button>
					<button
						className={`tracking-[1.93px] inline-block ${
							activeTab === 2
								? `border-b-4 ${planet}-border text-white`
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
					</button>
				</div>
				{planetsData.map((d) => {
					return (
						<section key={d.name}>
							<div>
								<img
									src={d.images.internal}
									alt={d.images.planet}
								/>
							</div>
							<div key={d.name} className="mt-4">
								<div
									id="tab-content-0"
									role="tabpanel"
									aria-labelledby="tab-0"
									tabIndex={activeTab === 0 ? "0" : "-1"}
									className={`px-6 ${
										activeTab === 0 ? "block" : "hidden"
									}`}
								>
									<p>{d.overview.content}</p>
								</div>
								<div
									id="tab-content-1"
									role="tabpanel"
									aria-labelledby="tab-1"
									tabIndex={activeTab === 1 ? "0" : "-1"}
									className={`px-6 ${
										activeTab === 1 ? "block" : "hidden"
									}`}
								>
									<p>{d.structure.content}</p>;
								</div>
								<div
									id="tab-content-2"
									role="tabpanel"
									aria-labelledby="tab-2"
									tabIndex={activeTab === 2 ? "0" : "-1"}
									className={`px-6 ${
										activeTab === 2 ? "block" : "hidden"
									}`}
								>
									<p>{d.geology.content}</p>
								</div>
							</div>
						</section>
					);
				})}
			</div>
		</>
	);
};

export default Home;
