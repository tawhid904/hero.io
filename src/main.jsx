import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import RootLayout from "./layout/RootLayout.jsx";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AppsPage from "./pages/AppsPage/AppsPage.jsx";
import InstalledPage from "./pages/InstallPage/InstallPage.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "/apps",
				Component: AppsPage
			},
			{
				path: "/installed-apps",
				Component: InstalledPage
			}
		],
		errorElement: <ErrorPage></ErrorPage>,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router}>{/* <App /> */}</RouterProvider>
	</StrictMode>,
);
