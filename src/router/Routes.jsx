import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import AppDetails from "../pages/AppDetails/AppDetails.jsx";
import AppsPage from "../pages/AppsPage/AppsPage";
import ErrorPage from "../pages/Error/ErrorPage.jsx";
import HomePage from "../pages/HomePage/HomePage";
import InstalledPage from "../pages/InstallPage/InstallPage.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: HomePage,
				// loader: () => fetch("/data.json"),
			},
			{
				path: "/apps",
				Component: AppsPage,
			},
			{
				path: "/apps/:id",
				Component: AppDetails,
			},
			{
				path: "/installed-apps",
				Component: InstalledPage,
			},
			{
				path: "*",
				Component: ErrorPage,
			},
		],
		// errorElement: <ErrorPage></ErrorPage>,
	},
]);
