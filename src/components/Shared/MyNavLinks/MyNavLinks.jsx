import { NavLink } from "react-router";

const MyNavLinks = ({ to, children, className }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`font-medium rounded-none p-0 pb-1 ${className}  ${isActive && "border-b border-indigo-500 text-indigo-500"}`
			}
		>
			{children}
		</NavLink>
	);
};

export default MyNavLinks;

// className={({ isActive }) =>
// 				`font-medium rounded-none p-0 pb-1 ${className}  ${isActive ? "border-b border-indigo-500 text-indigo-500" : ""}`
// 			}
