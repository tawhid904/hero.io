import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
	const navLinks = (
		<>
			<li>
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						`font-medium ${isActive ? "underline text-indigo-500" : ""}`
					}
				>
					Home
				</NavLink>
			</li>

			<li>
				<NavLink
					to={"/apps"}
					className={({ isActive }) =>
						`font-medium ${isActive && "underline text-indigo-500"}`
					}
				>
					Apps
				</NavLink>
			</li>

			<li>
				<NavLink
					to={"/installed-apps"}
					className={({ isActive }) =>
						isActive
							? "underline font-medium text-indigo-500"
							: "font-medium"
					}
				>
					Installation
				</NavLink>
			</li>
		</>
	);

	return (
		<nav className="bg-zinc-200">
			<div className="navbar container mx-auto lg:p-0">
				<div className="navbar-start">
					<div className="dropdown mr-3 lg:mr-0">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex="-1"
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							{navLinks}
						</ul>
					</div>

					<img
						src={Logo}
						width={50}
						height={50}
						alt="hero.io app logo"
					/>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navLinks}</ul>
				</div>

				<div className="navbar-end">
					<a
						href="https://github.com/tawhid904"
						target="_blank"
						className="flex items-center gap-2 btn bg-linear-to-tl to-[#632EE3] from-[#9F62F2] text-white"
					>
						<FaGithub className="text-xl"></FaGithub>Contribute
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
