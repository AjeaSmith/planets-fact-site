import { useState } from "react";
import data from "./data.json";
const Dummy = () => {
	const [activeTab, setActiveTab] = useState("overview");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="border-b border-gray-200" aria-label="tabs">
				<button
					className={`planet-info__tab ${
						activeTab === "overview" && "planet-info__tab--active"
					}`}
					onClick={() => handleTabClick("overview")}
				>
					Overview
				</button>
				<button
					className={`planet-info__tab ${
						activeTab === "structure" && "planet-info__tab--active"
					}`}
					onClick={() => handleTabClick("structure")}
				>
					Structure
				</button>
				<button
					className={`planet-info__tab ${
						activeTab === "geology" && "planet-info__tab--active"
					}`}
					onClick={() => handleTabClick("geology")}
				>
					Geology
				</button>
			</div>
			<div className="planet-info__content">
				{activeTab === "overview" && (
					<div className="planet-info__section">
						{data.map((planet) => {
							return (
								<>
									<h2 className="planet-info__title">
										Overview
									</h2>
									<p className="planet-info__text">
										{planet.overview.content}
									</p>
									<a
										className="planet-info__source"
										href={planet.overview.source}
										target="_blank"
										rel="noopener noreferrer"
									>
										Source
									</a>
								</>
							);
						})}
					</div>
				)}
				{activeTab === "structure" && (
					<div className="planet-info__section">
						{data.map((planet) => {
							return (
								<>
									<h2 className="planet-info__title">
										Structure
									</h2>
									<p className="planet-info__text">
										{planet.structure.content}
									</p>
									<a
										className="planet-info__source"
										href={planet.structure.source}
										target="_blank"
										rel="noopener noreferrer"
									>
										Source
									</a>
								</>
							);
						})}
					</div>
				)}
				{activeTab === "geology" && (
					<div className="planet-info__section">
						{data.map((planet) => {
							return (
								<>
									<h2 className="planet-info__title">
										Geology
									</h2>
									<p className="planet-info__text">
										{planet.geology.content}
									</p>
									<a
										className="planet-info__source"
										href={planet.geology.source}
										target="_blank"
										rel="noopener noreferrer"
									>
										Source
									</a>
								</>
							);
						})}
					</div>
				)}
			</div>
		</section>
	);
};
export default Dummy;
