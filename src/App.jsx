import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PlanetPage from "./PlanetPage";
import Home from "./Home";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:name" element={<PlanetPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
