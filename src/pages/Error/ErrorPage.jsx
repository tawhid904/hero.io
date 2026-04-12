import { Link } from "react-router";
import ErrorPicture from "../../assets/images/App-Error.png";

const ErrorPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full space-y-5">
				<img src={ErrorPicture} alt="Error Image" />

				<Link
					to="/"
					className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
				>
					Go Back Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
