import { useContext } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import ReviewUpStar from "../../assets/images/review.png";
import { InstalledAppContextProvider } from "../../context/InstalledAppsContextProvider";
import useAppsData from "../../hooks/useAppsData";

const AppDetails = () => {
	const { id } = useParams();
	const { apps, loading } = useAppsData();

	// Number To String = String(app.id)
	// String To Number = Number(id)
	// Check only value not type

	const clickedApp = apps.find((app) => app.id == id);

	const { installedApps, setInstalledApps } = useContext(
		InstalledAppContextProvider,
	);

	if (loading) {
		return (
			<div className="h-screen container mx-auto flex justify-center items-center pb-11">
				<ClipLoader color="#632EE3" size={50} />
			</div>
		);
	}

	const {
		companyName,
		image,
		ratingAvg,
		ratings,
		title,
		reviews,
		downloads,
		description,
		size,
	} = clickedApp;

	const handleInstallButton = (id) => {
		const exsitApp = installedApps.find((app) => app.id == id);

		if (exsitApp) {
			toast.error(`${title} Already Installed`);
			return;
		}

		toast.success(`${title} Installed`);
		setInstalledApps([...installedApps, clickedApp]);
	};

	const reversRating = [...ratings].reverse();

	return (
		<div className="bg-zinc-100 py-15 min-h-screen px-3 md:px-0">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row gap-8 pb-8">
					<figure className="bg-white p-3 rounded">
						<img
							src={image}
							alt={title}
							className="w-auto h-70 rounded-3xl"
						/>
					</figure>

					<div className="flex-1 space-y-2">
						<div className="border-b border-zinc-400 pb-6">
							<h1 className="text-3xl font-bold">{title}</h1>
							<p className="text-xl">
								Developed by{" "}
								<span className="text-indigo-600">
									{companyName}
								</span>
							</p>
						</div>

						<div className="flex gap-10 pt-6">
							<div className="space-y-2">
								<FaDownload className="text-3xl text-green-600"></FaDownload>
								<p>Downloads</p>
								<h2 className="text-3xl font-extrabold">
									{downloads}
								</h2>
							</div>

							<div className="space-y-2">
								<FaStar className="text-3xl text-orange-600"></FaStar>
								<p>Average Ratings</p>
								<h2 className="text-3xl font-extrabold">
									{ratingAvg}
								</h2>
							</div>

							<div className="space-y-2">
								<img
									src={ReviewUpStar}
									alt="Review Up Star Icon"
									width={32}
									height={32}
								/>
								<p>Total Reviews</p>
								<h2 className="text-3xl font-extrabold">
									{reviews}
								</h2>
							</div>
						</div>

						<div className="pt-5">
							<Link>
								<button
									onClick={() => handleInstallButton(id)}
									className="btn bg-green-500 text-white"
								>
									Install Now ({size} MB)
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="border-t py-6 border-zinc-400">
					<h1 className="text-2xl font-semibold">Ratings</h1>

					<div className="w-full h-70 py-5">
						<ResponsiveContainer>
							<BarChart data={reversRating} layout="vertical">
								<XAxis
									dataKey="count"
									type="number"
									axisLine={false}
									tickLine={false}
									tick={{
										fill: "#f97323",
										fontSize: 14,
										fontWeight: 500,
									}}
								/>

								<YAxis
									dataKey="name"
									type="category"
									axisLine={false}
									tickLine={false}
									tick={{
										fill: "#f97323",
										fontSize: 20,
										fontWeight: 500,
									}}
								/>

								<Bar dataKey="count" fill="#f97316" />

								<Tooltip></Tooltip>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>

				<div className="border-t pt-6 border-zinc-400">
					<h3 className="text-xl text-black">Description</h3>
					<p className="text-zinc-500">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default AppDetails;
