import BannerImage from "../assets/banner.png";

const Banner = () => {
    return (
        <div className="relative min-h-[650px] flex items-center overflow-hidden">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-200 border border-red-500/30 text-2xl font-bold text-[#9333ea] cursor-pointer text-sm font-medium px-5 py-2 rounded-full">
                        {/* ✨ New: AI-Powered Tools Available */}
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter ">
                        Supercharge Your
                        <br />
                        <span className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                     <button className="bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] transition-all px-4 py-2 rounded-2xl font-semibold text-lg  flex items-center gap-3 group text-white">
                            Explore Products
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </button>
                        <button class="btn btn-outline btn-primary transition-all px-8 py-5 rounded-2xl font-semibold text-lg  flex items-center gap-3 group">Watch Demo</button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-[520px] w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;