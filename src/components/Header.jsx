import { useState } from "react";
import iconHamburger from "../assets/icon-hamburger.svg";
import iconChevron from "../assets/icon-chevron.svg";
import data from "../data.json";
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<header className="px-6 py-4">
			<div>
				<div className="flex justify-between">
					<p>The Planets</p>
					<button
						className="text-lg font-bold text-gray-600 focus:outline-none"
						onClick={toggleMenu}
					>
						<img src={iconHamburger} alt="" />
					</button>
				</div>
				<nav
					className="flex items-center justify-between py-2 bg-gray-100"
					aria-label="Site Navigation"
				>
					<ul
						className={`flex flex-col w-full ${
							isMenuOpen ? "block" : "hidden"
						}`}
					>
						{data.map((planet) => {
							return (
								<li
									key={planet.name}
									className="menu-item flex justify-between font-bold text-[15px] uppercase tracking-[1.36px] py-5 grow basis-0 border-b border-slate-800"
								>
									<div className="flex">
										<div
											className={`w-5 h-5 ${planet.name}-color rounded-full mr-6`}
										></div>
										<a className="block" href="#">
											{planet.name}
										</a>
									</div>
									<img
										src={iconChevron}
										alt="right chevron"
									/>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
