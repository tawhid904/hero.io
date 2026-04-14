import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstalledAppContextProvider } from "../../context/InstalledAppsContextProvider";
import useAppsData from "../../hooks/useAppsData";

const Dashboard = () => {
	const { installedApps } = useContext(InstalledAppContextProvider);
	const { apps } = useAppsData();

	const notInstalledApps = apps.length - installedApps.length;

	const data = [
		{ name: "Installed", value: installedApps.length, fill: "#632EE3" },
		{ name: "Not Installed", value: notInstalledApps, fill: "#FF8811" },
	];

	const CustomLegend = ({ payload }) => {
		return (
			<ul className="flex flex-wrap gap-4 justify-center mt-4">
				{payload.map((entry, index) => (
					<li
						key={`item-${index}`}
						className="flex items-center gap-2 mt-5"
					>
						<div
							className="w-5 h-5 rounded-full"
							style={{ backgroundColor: entry.color }}
						></div>
						<span className="text-sm text-gray-700">
							{entry.value}
						</span>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="flex flex-col justify-center items-center py-10 space-y-5">
			<h1 className="text-3xl bg-gray-200 p-2 rounded-xl text-center">
				Installed & Not Installed Apps Graph
			</h1>

			<PieChart
				style={{
					width: "100%",
					maxWidth: "500px",
					maxHeight: "80vh",
					aspectRatio: 1,
				}}
				responsive
			>
				<Pie
					data={data}
					innerRadius="80%"
					outerRadius="100%"
					// Corner radius is the rounded edge of each pie slice
					cornerRadius="50%"
					fill="#8884d8"
					// padding angle is the gap between each pie slice
					paddingAngle={5}
					dataKey="value"
					isAnimationActive={true}
				/>
				<Legend content={CustomLegend} />
				<Tooltip></Tooltip>
			</PieChart>
		</div>
	);
};

export default Dashboard;
