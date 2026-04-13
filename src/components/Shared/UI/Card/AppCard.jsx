import { FaDownload, FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
	const { title, image, downloads, ratingAvg } = app;

	return (
		<div className="flex justify-center items-center flex-col rounded-md p-3 shadow-xl">
			<div className="p-5 bg-zinc-100 rounded-xl">
				<img
					src={image}
					alt={title}
					width={500}
					height={500}
					className="rounded-md"
				/>
			</div>

			<div className="w-full mt-2 space-y-3">
				<h1 className="text-xl font-medium text-center">{title}</h1>

				<div className="flex justify-between">
					<div className="flex items-center bg-green-50 text-green-400 p-2 rounded font-medium gap-2">
						<span>
							<FaDownload></FaDownload>
						</span>
						<span>{downloads}</span>
					</div>

					<div className="flex items-center bg-orange-50 text-orange-400 p-2 rounded font-medium gap-2">
                        <span><FaStar></FaStar></span>
						<span>{ratingAvg}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppCard;
