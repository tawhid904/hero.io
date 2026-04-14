import { useContext } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { InstalledAppContextProvider } from "../../../../context/InstalledAppsContextProvider";

const InstalledAppCard = ({ app }) => {
	const { title, size, downloads, ratingAvg, image } = app;
	const { installedApps, setInstalledApps } = useContext(
		InstalledAppContextProvider,
	);

	const handleDeleteButton = (app) => {
		const restApps = installedApps.filter((iApp) => iApp.id != app.id);
		setInstalledApps(restApps);
		toast.success(`${title} successfully uninstalled`);
	};

	return (
		<div className="bg-white flex justify-between items-center p-3 rounded">
			<div className="flex gap-5 items-center">
				<div className="bg-gray-200 rounded-xl">
					<img src={image} alt={title} width={70} height={70} />
				</div>
				<div className="space-y-2">
					<h2 className="text-xl font-medium">{title}</h2>
					<div className="flex gap-3 items-center">
						<div className="flex items-center text-green-400 font-medium gap-2">
							<span>
								<FaDownload></FaDownload>
							</span>
							<span>{downloads}</span>
						</div>

						<div className="flex items-center text-orange-400 font-medium gap-2">
							<span>
								<FaStar></FaStar>
							</span>
							<span>{ratingAvg}</span>
						</div>

						<p className="text-zinc-500 font-medium">{size} MB</p>
					</div>
				</div>
			</div>

			<div>
				<button className="btn" onClick={() => handleDeleteButton(app)}>
					Uninstall
				</button>
			</div>
		</div>
	);
};

export default InstalledAppCard;
