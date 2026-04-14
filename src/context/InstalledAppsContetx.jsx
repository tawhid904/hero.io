import { useState } from "react";
import { InstalledAppContextProvider } from "./InstalledAppsContextProvider";

const InstalledAppsContetx = ({ children }) => {
    const [installedApps, setInstalledApps] = useState([])

	const data = {
		installedApps,
        setInstalledApps
	};

	return (
		<InstalledAppContextProvider.Provider value={data}>
			{children}
		</InstalledAppContextProvider.Provider>
	);
};

export default InstalledAppsContetx;
