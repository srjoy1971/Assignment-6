
const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-6">
              DigiTools
            </h2>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-blue-50 font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-blue-50 font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-blue-50 font-semibold mb-6 text-lg">Resources</h3>

            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Social</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white text-black px-3 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                IG
              </a>
              <a
                href="#"
                className="bg-white text-black px-3 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                FB
              </a>

              <a
                href="#"
                className="bg-white text-black px-3 py-2 rounded-full hover:bg-sky-500 hover:text-white transition"
              >
                X
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>
            © {new Date().getFullYear()} Digitools. All rights reserved.
          </div>

          <ul className="flex gap-6">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Cookies</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;