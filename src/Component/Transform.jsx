import React from 'react';

const Transform = () => {
    return (
        <div>
           <section className="bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtitle */}
        <p className="text-purple-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-[#7c3aed] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg active:scale-95">
            Explore Products
          </button>
          
          <button className="border-2 border-white/60 bg-white/10 px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all active:scale-95">
            View Pricing
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-purple-200 text-sm flex flex-wrap justify-center gap-2 md:gap-4 opacity-90">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section> 
        </div>
    );
};

export default Transform;