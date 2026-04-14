import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import InstalledAppsContetx from "./context/InstalledAppsContetx";
import "./index.css";
import { router } from "./router/Routes";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<InstalledAppsContetx>
			<RouterProvider router={router}></RouterProvider>
		</InstalledAppsContetx>
	</StrictMode>,
);
