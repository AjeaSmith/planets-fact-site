import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/fact" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
