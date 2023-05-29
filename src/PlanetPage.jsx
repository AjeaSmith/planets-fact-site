import { useParams } from "react-router-dom";
import planets from "./data.json";
import Planet from "./components/Planet";

const PlanetPage = () => {
	const { name } = useParams();

	const filteredPlanets = planets.filter((item) => item.name === name);
	const defaultPlanet = planets.filter((item) => item.name === "Mercury");

	return (
		<>
			{name === undefined ? (
				<Planet data={defaultPlanet} />
			) : (
				<Planet data={filteredPlanets} />
			)}
		</>
	);
};

export default PlanetPage;
