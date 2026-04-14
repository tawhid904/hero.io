import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import MyNavLinks from "../Shared/MyNavLinks/MyNavLinks";

const Navbar = () => {
	/*  Way One
	const navLinks = (
		<>
			<li>
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						`rounded-none p-0 pb-1 ${isActive ? "border-b border-indigo-500 text-indigo-500" : ""}`
					}
				>
					Home
				</NavLink>
			</li>

			<li>
				<NavLink
					to={"/apps"}
					className={({ isActive }) =>
						`rounded-none p-0 pb-1 ${isActive && "border-b border-indigo-500 text-indigo-500"}`
					}
				>
					Apps
				</NavLink>
			</li>

			<li>
				<NavLink
					to={"/installed-apps"}
					className={({ isActive }) =>
						`rounded-none p-0 pb-1 ${isActive && "border-b border-indigo-500 text-indigo-500"}`
					}
				>
					Installation
				</NavLink>
			</li>
		</>
	); */

	// Way Two
	const navItems = [
		{
			path: "/",
			name: "Home",
		},
		{
			path: "/apps",
			name: "Apps",
		},
		{
			path: "/installed-apps",
			name: "Installation",
		},
		{
			path: "/dashboard",
			name: "Dashboard",
		},
	];

	return (
		<nav className="bg-zinc-100">
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
							className="menu-sm dropdown-content bg-base-300 p-2"
						>
							<li>
								<MyNavLinks to={"/"}>Home</MyNavLinks>
							</li>
							<li>
								<MyNavLinks
									to={"/apps"}
									className={"text-red-600"}
								>
									Apps
								</MyNavLinks>
							</li>
							<li>
								<MyNavLinks to={"/installed-apps"}>
									Installation
								</MyNavLinks>
							</li>
						</ul>
					</div>

					<div className="flex items-center gap-2">
						<img
							src={Logo}
							width={50}
							height={50}
							alt="hero.io app logo"
						/>
						<h2 className="text-indigo-500 font-medium">HERO.IO</h2>
					</div>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="flex flex-row gap-3">
						{navItems.map((item, index) => (
							<MyNavLinks key={index} to={item.path}>
								{item.name}
							</MyNavLinks>
						))}
					</ul>

					{/* Way 2
					
					<ul className="flex flex-row gap-3">
						<li>
							<MyNavLinks to={"/"}>Home</MyNavLinks>
						</li>
						<li>
							<MyNavLinks to={"/apps"}>Apps</MyNavLinks>
						</li>
						<li>
							<MyNavLinks to={"/installed-apps"}>
								Installation
							</MyNavLinks>
						</li>
					</ul>
					*/}
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
