import React from 'react';

const Transparent = () => {
    return (
       
    <section className="bg-white py-20 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Starter Card */}
        <div className="p-8 rounded-3xl border border-slate-100 bg-white text-slate-900 shadow-sm hover:shadow-md transition-all">
          <div className="mb-8 text-left">
            <h3 className="text-xl font-bold mb-1">Starter</h3>
            <p className="text-sm text-slate-400">Perfect for getting started</p>
          </div>
          <div className="mb-8 text-left">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-lg text-slate-400">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-left text-sm text-slate-600">
            <li className="flex items-center gap-3">✅ Access to 10 free tools</li>
            <li className="flex items-center gap-3">✅ Basic templates</li>
            <li className="flex items-center gap-3">✅ Community support</li>
          </ul>
          <button className="w-full py-4 rounded-full font-bold bg-[#8B2CFF] text-white hover:bg-[#7a24e0]">
            Get Started Free
          </button>
        </div>

        {/* Pro Card (Most Popular) */}
        <div className="relative p-8 rounded-3xl bg-[#8B2CFF] text-white shadow-xl scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Most Popular
          </div>
          <div className="mb-8 text-left">
            <h3 className="text-xl font-bold mb-1">Pro</h3>
            <p className="text-sm text-purple-100">Best for professionals</p>
          </div>
          <div className="mb-8 text-left">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-lg text-purple-100">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-left text-sm text-purple-50">
            <li className="flex items-center gap-3">✅ Access to all premium tools</li>
            <li className="flex items-center gap-3">✅ Unlimited templates</li>
            <li className="flex items-center gap-3">✅ Priority support</li>
            <li className="flex items-center gap-3">✅ Cloud sync</li>
          </ul>
          <button className="w-full py-4 rounded-full font-bold bg-white text-[#8B2CFF] hover:bg-slate-50">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise Card */}
        <div className="p-8 rounded-3xl border border-slate-100 bg-white text-slate-900 shadow-sm hover:shadow-md transition-all">
          <div className="mb-8 text-left">
            <h3 className="text-xl font-bold mb-1">Enterprise</h3>
            <p className="text-sm text-slate-400">For teams and businesses</p>
          </div>
          <div className="mb-8 text-left">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-lg text-slate-400">/Month</span>
          </div>
          <ul className="space-y-4 mb-10 text-left text-sm text-slate-600">
            <li className="flex items-center gap-3">✅ Everything in Pro</li>
            <li className="flex items-center gap-3">✅ Team collaboration</li>
            <li className="flex items-center gap-3">✅ Dedicated support</li>
          </ul>
          <button className="w-full py-4 rounded-full font-bold bg-[#8B2CFF] text-white hover:bg-[#7a24e0]">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
    );
};

export default Transparent;