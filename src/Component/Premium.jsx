import React from 'react';

const Premium = () => {
  return (
    <header>
      <section className="bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 text-white">

          {/* Active Users */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h2 className="text-6xl font-bold mb-2">50K+</h2>
            <p className="text-purple-100 text-sm opacity-80 uppercase tracking-wide">Active Users</p>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:block h-16 w-[1px] bg-white opacity-30"></div>

          {/* Premium Tools */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h2 className="text-6xl font-bold mb-2">200+</h2>
            <p className="text-purple-100 text-sm opacity-80 uppercase tracking-wide">Premium Tools</p>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block h-16 w-[1px] bg-white opacity-30"></div>

          {/* Rating */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h2 className="text-6xl font-bold mb-2">4.9</h2>
            <p className="text-purple-100 text-sm opacity-80 uppercase tracking-wide">Rating</p>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto pt-16 pb-3 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold p-2">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products designed
          <span className="block">to boost your productivity and creativity.</span>
        </p>
      </div>
      </div>
    </header>

  );
};

export default Premium;