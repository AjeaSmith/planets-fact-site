import { useParams } from "react-router-dom";
import planets from "./data.json";
import { useState } from "react";
import TabMenu from "./components/TabMenu";

const PlanetPage = () => {
	const { name } = useParams();
	const [activeTab, setActiveTab] = useState(0);
	const filteredPlanets = planets.filter((item) => item.name === name);

	return (
		<>
			{filteredPlanets.map((d) => {
				return (
					<section key={d.name}>
						<div className="planet-grid md:grid-cols-2">
							<TabMenu
								name={name}
								activeTab={activeTab}
								setActiveTab={setActiveTab}
							/>
							<div className="flex md:col-span-3 pt-10">
								<div className="mx-auto">
									{activeTab === 0 && (
										<img
											src={d.images.planet}
											className={`w-[${d.images.size}px]`}
										/>
									)}
									{activeTab === 1 && (
										<img src={d.images.internal} />
									)}
									{activeTab === 2 && (
										<div className="relative ">
											<img
												src={d.images.planet}
												className="w-[290px]"
											/>
											<img
												src={d.images.geology}
												className="w-[150px] absolute top-44 left-16"
											/>
										</div>
									)}
								</div>
							</div>
							<div
								key={d.name}
								className="mb-7 px-6 md:row-start-2 md:mb-0 md:px-[39px]"
							>
								<div
									id="tab-content-0"
									role="tabpanel"
									aria-labelledby="tab-0"
									tabIndex={activeTab === 0 ? "0" : "-1"}
									className={`text-center ${
										activeTab === 0 ? "block" : "hidden"
									} md:text-left`}
								>
									<h2 className="w-full text-H2 text-center mb-4 font-normal md:text-left">
										{name}
									</h2>
									<p className="mb-8 text-SB font-normal md:text-white/75">
										{d.overview.content}
									</p>
									<p className="text-white/50">
										Source :{" "}
										<a
											href={d.overview.source}
											className="underline font-bold"
										>
											Wikipedia
										</a>
									</p>
								</div>
								<div
									id="tab-content-1"
									role="tabpanel"
									aria-labelledby="tab-1"
									tabIndex={activeTab === 1 ? "0" : "-1"}
									className={`text-center ${
										activeTab === 1 ? "block" : "hidden"
									} md:text-left`}
								>
									<h2 className="w-full text-H2 text-center mb-4 font-normal md:text-left">
										{name}
									</h2>
									<p className="mb-8 text-SB font-normal">
										{d.structure.content}
									</p>
									<p className="text-white/50">
										Source :{" "}
										<a
											href={d.structure.source}
											className="underline font-bold"
										>
											Wikipedia
										</a>
									</p>
								</div>
								<div
									id="tab-content-2"
									role="tabpanel"
									aria-labelledby="tab-2"
									tabIndex={activeTab === 2 ? "0" : "-1"}
									className={`text-center ${
										activeTab === 2 ? "block" : "hidden"
									} md:text-left`}
								>
									<h2 className="w-full text-H2 text-center mb-4 font-normal md:text-left">
										{name}
									</h2>
									<p className="mb-8 text-SB font-normal">
										{d.geology.content}
									</p>
									<p className="text-white/50">
										Source :{" "}
										<a
											href={d.geology.source}
											className="underline font-bold"
										>
											Wikipedia
										</a>
									</p>
								</div>
							</div>
							<div
								className="grid gap-2 uppercase px-6 md:row-start-3 md:col-span-3 
							md:px-[39px] md:grid-cols-4 md:h-fit"
							>
								<div
									className="flex justify-between border border-slate-800 p-4 items-center 
								md:flex-col md:justify-normal md:items-start md:mr-[11px]"
								>
									<p className="text-[8px] font-bold text-white/50 tracking-[0.73px]">
										Rotation Time
									</p>
									<h3 className="text-h5 font-['Antonio'] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] md:mt-[6px]">
										{d.rotation}
									</h3>
								</div>
								<div
									className="flex justify-between border border-slate-800 p-4 items-center 
								md:flex-col md:justify-normal md:items-start md:mr-[11px]"
								>
									<p className="text-[8px] font-bold text-white/50 tracking-[0.73px]">
										Revolution Time
									</p>
									<h3 className="text-h5 font-['Antonio'] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] md:mt-[6px]">
										{d.revolution}
									</h3>
								</div>
								<div
									className="flex justify-between border border-slate-800 p-4 items-center 
								md:flex-col md:justify-normal md:items-start md:mr-[11px]"
								>
									<p className="text-[8px] font-bold text-white/50 tracking-[0.73px]">
										Radius
									</p>
									<h3 className="text-h5 font-['Antonio'] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] md:mt-[6px]">
										{d.radius}
									</h3>
								</div>
								<div
									className="flex justify-between border border-slate-800 p-4 items-center 
								md:flex-col md:justify-normal md:items-start"
								>
									<p className="text-[8px] font-bold text-white/50 tracking-[0.73px]">
										Temperature
									</p>
									<h3 className="text-h5 font-['Antonio'] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] md:mt-[6px]">
										{d.temperature}
									</h3>
								</div>
							</div>
						</div>
					</section>
				);
			})}
		</>
	);
};

export default PlanetPage;
