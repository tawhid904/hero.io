import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ClipLoader } from "react-spinners";
import AppCard from "../UI/Card/AppCard";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
	// const apps = use(appsPromise);
	// console.log("Apps data got using use hook", apps);

	// const appsData = useLoaderData();
	// console.log("Apps data got using useLoaderData", appsData);

	const [apps, setApps] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/data.json");
			const appsData = await res.json();

			setTimeout(() => {
				setApps(appsData);
				setLoading(false);
			}, 2000);
		};
		fetchData();
	}, []);

	return (
		<div className="">
			<div className="text-center py-7 space-y-3">
				<h2 className="font-bold text-4xl text-gray-900">
					Trending Apps
				</h2>
				<p className="text-zinc-500 px-2 md:px-0">
					Explore All Trending Apps on the Market developed by us
				</p>
			</div>

			{loading ? (
				<div className="flex justify-center items-center pb-11">
					<ClipLoader color="#632EE3" size={50} />
				</div>
			) : (
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-11">
					{apps.slice(0, 8).map((app, inde) => (
						<AppCard key={inde} app={app}></AppCard>
					))}
					<div className="flex justify-center items-center md:col-end-3 lg:col-span-4 mt-3">
						<Link to={"/apps"}>
							<button className="btn bg-linear-to-r from-violet-600 to-violet-500 text-white">Show All</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default TrendingApps;
