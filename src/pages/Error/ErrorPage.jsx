import { Link } from "react-router";
import ErrorPicture from "../../assets/images/error-pic.png";

const ErrorPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full space-y-2">
				<img src={ErrorPicture} alt="Error Image" />
				<h2 className="text-2xl font-bold">Oops, page not found!</h2>
				<p className="text-zinc-500">
					The page you are looking for is not available.
				</p>
				<Link to="/">
					<button className="inline-block bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer">
						Go Back Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
