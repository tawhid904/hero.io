import { useContext } from "react";
import InstalledAppCard from "../../components/Shared/UI/InstalledAppCard/InstalledAppCard";
import { InstalledAppContextProvider } from "../../context/InstalledAppsContextProvider";

const InstallPage = () => {
	const { installedApps } = useContext(InstalledAppContextProvider);

	return (
		<div className="bg-gray-100 py-12">
			{installedApps.length === 0 ? (
				<div className="container mx-auto">
					<h1 className="text-center text-3xl font-medium">No App Installed</h1>
				</div>
			) : (
				<div className="container mx-auto space-y-5 px-2 md:px-0">
					<div className="text-center space-y-3">
						<h1 className="text-5xl font-bold">
							Your Installed Apps
						</h1>
						<p className="text-xl text-zinc-500">
							Explore All Trending Apps on the Market developed by
							us
						</p>
					</div>

					<div className="flex justify-between items-center mt-12">
						<div>
							<h2 className="text-2xl font-bold">
								{installedApps.length} Apps Found
							</h2>
						</div>
						<div>Sort by</div>
					</div>

					<div className="space-y-4">
						{installedApps.map((app, ind) => (
							<InstalledAppCard
								key={ind}
								app={app}
							></InstalledAppCard>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default InstallPage;
