import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
	return (
		<div className="bg-[#001931]">
			<div className="container mx-auto pt-10 px-3 md:px-0">
				<div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-500 space-y-5 md:space-y-0">
					<div className="flex items-center gap-2 flex-6">
						<img src={Logo} width={50} height={50} alt="" />
						<h2 className="text-indigo-500 font-medium">HERO.IO</h2>
					</div>
					<div className="flex-1 space-y-3">
						<h3 className="text-xl text-white">Social Links</h3>
						<div className="flex gap-2">
							<a
								target="_blank"
								href="https://x.com/TN_EARNING_2021"
								className="p-1 bg-white rounded-full"
							>
								<FaXTwitter className="text-black text-xl"></FaXTwitter>
							</a>

							<a
								target="_blank"
								href="https://www.linkedin.com/in/tawhidulislamzihad/"
								className="p-1 bg-white rounded-full"
							>
								<FaLinkedinIn className="text-black text-xl"></FaLinkedinIn>
							</a>

							<a
								target="_blank"
								href="https://www.facebook.com/tawhidzihad1/"
								className="p-1 bg-white rounded-full"
							>
								<FaFacebookF className="text-black text-xl"></FaFacebookF>
							</a>
						</div>
					</div>
				</div>

				<div className="flex justify-center items-center py-5">
					<h3 className="text-white">
						Copyright © 2026 - All right reserved
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Footer;
