// import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import AppCard from "../../components/Shared/UI/Card/AppCard";
import useAppsData from "../../hooks/useAppsData";

const AppsPage = () => {
	const { apps, loading } = useAppsData();

	return (
		<div>
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
					{apps.map((app, inde) => (
						<AppCard key={inde} app={app}></AppCard>
					))}
				</div>
			)}
		</div>
	);
};

export default AppsPage;
