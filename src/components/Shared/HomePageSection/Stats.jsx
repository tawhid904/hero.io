const Stats = () => {
	return (
		<div className="bg-linear-to-br from-indigo-700 to-violet-400 py-10">
			<div className="max-w-4xl mx-auto space-y-8">
				<h2 className="text-center font-bold text-2xl md:text-5xl text-white">
					Trusted by Millions, Built for You
				</h2>

				<div className="flex flex-col md:flex-row justify-around items-center text-center text-white">
					<div className="space-y-4">
						<p>Total Downloads</p>
						<h2 className="text-6xl font-bold">29.6M</h2>
						<p>21% more than last month</p>
					</div>
					<div className="space-y-4">
						<p>Total Reviews</p>
						<h2 className="text-6xl font-bold">906K</h2>
						<p>46% more than last month</p>
					</div>
					<div className="space-y-4">
						<p>Active Apps</p>
						<h2 className="text-6xl font-bold">132+</h2>
						<p>31 more will Launch</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
