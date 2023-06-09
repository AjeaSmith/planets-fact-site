/* eslint-disable react/prop-types */
import { useState } from "react";
import TabMenu from "./TabMenu";

const Planet = ({ data }) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			{data.map((d) => {
				return (
					<section key={d.name}>
						<div className="planet-grid md:grid-cols-2 xl:h-[92vh]">
							<TabMenu
								name={d.name}
								activeTab={activeTab}
								setActiveTab={setActiveTab}
							/>
							<div className="flex my-24 md:col-span-3 xl:col-start-1 xl:col-end-2 xl:my-0 xl:row-start-1 xl:row-end-3 xl:items-center xl:justify-center">
								<div className="mx-auto xl:mx-0">
									{activeTab === 0 && (
										<img
											src={d.images.planet}
											srcSet={`${d.images.planet} ${d.images.size}w, ${d.images.planet} ${d.images.tablet}w, ${d.images.planet} ${d.images.desktop}w`}
											sizes={`(min-width: 768px) ${d.images.tablet}px, (min-width: 1440px) ${d.images.desktop}px, ${d.images.size}px`}
										/>
									)}
									{activeTab === 1 && (
										<img
											src={d.images.internal}
											srcSet={`${d.images.internal} ${d.images.size}w, ${d.images.internal} ${d.images.tablet}w, ${d.images.internal} ${d.images.desktop}w`}
											sizes={`(min-width: 768px) ${d.images.tablet}px, (min-width: 1440px) ${d.images.desktop}px, ${d.images.size}px`}
										/>
									)}
									{activeTab === 2 && (
										<div className="relative">
											<img
												src={d.images.planet}
												srcSet={`${d.images.planet} ${d.images.size}w, ${d.images.planet} ${d.images.tablet}w, ${d.images.planet} ${d.images.desktop}w`}
												sizes={`(min-width: 768px) ${d.images.tablet}px, (min-width: 1440px) ${d.images.desktop}px, ${d.images.size}px`}
											/>

											<img
												src={d.images.geology}
												className="geology-img w-4/12"
											/>
										</div>
									)}
								</div>
							</div>
							<div
								key={d.name}
								className="mb-7 px-6 md:row-start-2 md:mb-0 md:px-[39px] xl:row-start-1 xl:col-start-2 xl:max-w-[400px] xl:flex xl:items-end xl:px-0"
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
									<h2 className="w-full text-H2 text-center mb-4 font-normal md:text-left md:text-[48px] xl:text-H1">
										{d.name}
									</h2>
									<p className="mb-8 text-SB font-normal text-white/75">
										{d.overview.content}
									</p>
									<p className="text-white/50 md:text-[12px]">
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
									<h2 className="w-full text-H2 text-center mb-4 font-normal md:text-left md:text-[48px] xl:text-H1">
										{d.name}
									</h2>
									<p className="mb-8 text-SB font-normal text-white/75">
										{d.structure.content}
									</p>
									<p className="text-white/50 md:text-[12px]">
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
									<h2 className="w-full text-H2 text-center mb-4 font-normal md:text-left md:text-[48px] xl:text-H1">
										{d.name}
									</h2>
									<p className="mb-8 text-SB font-normal text-white/75">
										{d.geology.content}
									</p>
									<p className="text-white/50 md:text-[12px]">
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
								className="grid gap-2 mb-10 uppercase px-6 md:row-start-3 md:col-span-3 
                                        md:px-[39px] md:grid-cols-4 md:h-fit xl:max-w-[1440px] xl:mb-5 xl:mx-auto"
							>
								<div
									className="flex justify-between border border-slate-800 p-4 items-center 
                                            md:flex-col md:justify-normal md:items-start md:mr-[11px] xl:mr-[30px] xl:p-8"
								>
									<p className="text-[8px] font-bold text-white/50 tracking-[0.73px] xl:text-[11px]">
										Rotation Time
									</p>
									<h3 className="text-H5 font-['Antonio'] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] md:mt-[6px] xl:text-H2">
										{d.rotation}
									</h3>
								</div>
								<div
									className="flex justify-between border border-slate-800 p-4 items-center 
                                            md:flex-col md:justify-normal md:items-start md:mr-[11px] xl:mr-[30px] xl:p-8"
								>
									<p className="text-[8px] font-bold text-white/50 tracking-[0.73px] xl:text-[11px]">
										Revolution Time
									</p>
									<h3 className="text-H5 font-['Antonio'] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] md:mt-[6px] xl:text-H2">
										{d.revolution}
									</h3>
								</div>
								<div
									className="flex justify-between border border-slate-800 p-4 items-center 
                                            md:flex-col md:justify-normal md:items-start md:mr-[11px] xl:mr-[30px] xl:p-8"
								>
									<p className="text-[8px] font-bold text-white/50 tracking-[0.73px] xl:text-[11px]">
										Radius
									</p>
									<h3 className="text-H5 font-['Antonio'] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] md:mt-[6px] xl:text-H2">
										{d.radius}
									</h3>
								</div>
								<div
									className="flex justify-between border border-slate-800 p-4 items-center 
                                            md:flex-col md:justify-normal md:items-start xl:p-8"
								>
									<p className="text-[8px] font-bold text-white/50 tracking-[0.73px] xl:text-[11px]">
										Temperature
									</p>
									<h3 className="text-h5 font-['Antonio'] tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] md:mt-[6px] xl:text-H2">
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

export default Planet;
