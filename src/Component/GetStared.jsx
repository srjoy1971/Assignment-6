import React from 'react';

const GetStared = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get Started In 3 Steps</h2>
        <p className="mt-4 text-lg text-gray-500">Start using premium digital tools in minutes, not hours.</p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Step 1 */}
          <div className="relative group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white">01</div>
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-purple-50 mb-6"><img src="/user.png" alt="" />
            </div>
             {/* <img className='' src="/user.png" alt="" /> */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">Create Account</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
          </div>

          {/* Step 2 */}
          <div className="relative group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white">02</div>
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-purple-50 mb-6"> <img src="/package.png" alt="" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Products</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
          </div>

          {/* Step 3 */}
          <div className="relative group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white">03</div>
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-purple-50 mb-6"><img src="/rocket.png" alt="" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Start Creating</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStared;