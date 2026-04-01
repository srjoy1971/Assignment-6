import React, { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model , carts, setCarts }) => {
const tagColors = {
    "New": "bg-green-100 text-green-700",
    "Popular": "bg-purple-100 text-purple-700",
    "Best Seller": "bg-yellow-100 text-orange-500"
  };


    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        setIsSubscribed(true);

        const alreadyInCart = carts.some(item => item.id === model.id);
        if (alreadyInCart) {
            toast.info("Item is already in cart!");
            return;
        }
        setCarts([...carts, model]);
        toast.success("Item added to cart!");
    }



  return (
    <div className="rounded-3xl p-8 relative hover:shadow-lg shadow-sm border-gray-100 border transition-all duration-300">
      <span className={`absolute top-6 right-6 px-4 py-1 rounded-full text-sm ${tagColors[model.tag] || "bg-gray-100 text-gray-700"}`}>
        {model.tag}
      </span>

      <div className="w-16 h-16 rounded-full bg-base-300 flex items-center justify-center mb-6">
        <img src={model.icon} alt={model.name} className="w-8 h-8" />
      </div>

      <h2 className="text-2xl font-bold mb-3">{model.name}</h2>
      <p className="text-gray-500 mb-6">{model.description}</p>

      <h3 className="text-3xl font-bold mb-6">
        ${model.price}
        <span className="text-gray-400 text-lg">/{model.period}</span>
      </h3>

      <ul className="mb-8">
        {model.features.map((feature, index) => (
          <li key={index} className="flex gap-2 text-gray-600 mb-2">
            <span className="text-green-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubscribe}
        className="w-full py-3 rounded-full text-white bg-gradient-to-r from-[#8b2cf5] to-[#a434ff]"
      >
        {isSubscribed ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ModelCard;