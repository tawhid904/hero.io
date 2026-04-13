import Banner from "../../components/Shared/HomePageSection/Banner";
import Stats from "../../components/Shared/HomePageSection/Stats";
import TrendingApps from "../../components/Shared/HomePageSection/TrendingApps";

const HomePage = () => {
	// const appsData = useLoaderData()

	// console.log("data from home page", appsData);

	return (
		<>
			<Banner></Banner>
			<Stats></Stats>
			<TrendingApps></TrendingApps>
		</>
	);
};

export default HomePage;
