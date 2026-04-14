import { useEffect, useState } from "react";

const useAppsData = () => {
	const [apps, setApps] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/data.json");
			const appsData = await res.json();

			setTimeout(() => {
				setApps(appsData);
				setLoading(false);
			}, 500);
		};
		fetchData();
	}, []);

	return { apps, loading };
};

export default useAppsData;
