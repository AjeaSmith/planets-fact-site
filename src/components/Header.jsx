import { useState } from "react";
import { Link } from "react-router-dom";
import iconChevron from "../assets/icon-chevron.svg";
import data from "../data.json";
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<header className="flex flex-col md:items-center md:border-b md:border-b-slate-800 lg:flex-row lg:justify-between mb-3">
			<div className="border-b border-b-slate-800 md:border-none">
				<div className="flex items-center justify-between px-6 pt-4 pb-[17px] w-full">
					<p className="text-[28px] uppercase font-normal font-['Antonio']">
						The Planets
					</p>
					<button
						onClick={toggleMenu}
						className="md:hidden"
						aria-controls="menu"
						aria-expanded="false"
					>
						<span className="sr-only">Menu</span>
						<svg
							opacity={isMenuOpen ? 0.4 : 1}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="17"
						>
							<g fill="#FFF" fillRule="evenodd">
								<path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
							</g>
						</svg>
					</button>
				</div>
			</div>
			<nav
				className={`flex items-center px-6 ${
					isMenuOpen ? "h-[90vh]" : ""
				} md:h-auto md:w-full md:justify-between md:pt-0 md:px-0 lg:w-fit`}
				aria-label="Site Navigation"
			>
				<ul
					className={`w-full ${
						isMenuOpen ? "flex flex-col h-[80vh]" : "hidden"
					} md:h-auto md:flex md:flex-row md:justify-evenly`}
					role="list"
				>
					{data.map((planet) => {
						return (
							<li
								key={planet.name}
								className="menu-item flex items-center justify-between font-bold text-[15px] uppercase tracking-[1.36px] py-5 grow basis-0 border-b border-slate-800 md:text-H4 md:grow-0 md:border-b-0 lg:opacity-75 lg:hover:opacity-100 lg:mr-[33px]"
							>
								<div className="flex">
									<div
										className={`w-5 h-5 ${planet.name}-color rounded-full mr-6 md:hidden`}
									></div>
									<Link
										to={{
											pathname: "/fact/",
											search: `?name=${planet.name}`, // inject code value into template
										}}
										className="block md:inline-block"
									>
										{planet.name}
									</Link>
								</div>
								<img
									className="md:hidden"
									src={iconChevron}
									alt="right chevron"
								/>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
