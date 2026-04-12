import BannerImage from '../../../assets/images/hero.png'
import AppleStoreIcon from "../../../assets/images/apple-store.png"
import PlayStoreIcon from "../../../assets/images/play-store.png"

const Banner = () => {
	return (
		<div className="pt-10 space-y-8">
			<div className="max-w-5xl mx-auto flex justify-center items-center flex-col space-y-7">
				<h1 className="text-6xl font-bold text-slate-900 text-center">
					We Build <br />
					<span className="text-indigo-600">Productive</span> Apps
				</h1>
				<p className="px-2 md:px-0 max-w-4xl mx-auto text-center text-xl text-zinc-500">
					At HERO.IO, we craft innovative apps designed to make
					everyday life simpler, smarter, and more exciting. Our goal
					is to turn your ideas into digital experiences that truly
					make an impact.
				</p>

				<div className="flex gap-2">
					<button className="btn shadow-none"><img src={PlayStoreIcon} width={25} /> Google Play</button>
					<button className="btn shadow-none"><img src={AppleStoreIcon} width={25} /> App Store</button>
				</div>
			</div>

			<div>
                <img src={BannerImage} alt="Banner picture" className='mx-auto'/>
            </div>
		</div>
	);
};

export default Banner;
