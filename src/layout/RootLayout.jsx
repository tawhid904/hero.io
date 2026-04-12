import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<h1>Footer</h1>
		</div>
	);
};

export default RootLayout;
