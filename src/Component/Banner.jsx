import BannerImage from "../assets/banner.png";

const Banner = () => {
    return (
        <div className="pt-16 relative min-h-[600px] flex items-center overflow-hidden px-5 lg:px-0 mb-8 sm:mb-8">
            <div className="pt-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

                <div className="space-y-5 text-center lg:text-left">

                    <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-blue-200 border border-red-500/30 text-[#9333ea] cursor-pointer text-sm md:text-base font-medium px-4 py-2 rounded-full">
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                        Supercharge Your
                        <br />
                        <span className="text-[#9333ea]">
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-zinc-700 max-w-lg mx-auto lg:mx-0">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">

                        <button className="bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] transition-all px-6 py-3 rounded-2xl font-semibold text-base md:text-lg flex items-center justify-center gap-3 group text-white">
                            Explore Products
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </button>

                        <button className="btn btn-outline btn-primary px-6 py-3 rounded-2xl font-semibold text-base md:text-lg flex items-center justify-center gap-3">
                            Watch Demo
                        </button>

                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
                    <img
                        className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[520px] w-auto object-contain drop-shadow-2xl rounded-3xl"
                        src={BannerImage}
                        alt="AI Models Banner"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;