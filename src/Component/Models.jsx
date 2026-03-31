import { use } from "react";

const Models = ({ modelPromise }) => {

  const models = use(modelPromise);

  return (
    <div className="p-16">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-bold p-2">
          Premium Digital Tools
        </h2>

        <p>
          Choose from our curated collection of premium digital products designed
          <span className="block">
            to boost your productivity and creativity.
          </span>
        </p>
      </div>


      {/* Buttons */}
      <div className="p-6 flex gap-3 justify-center">
        <button className="btn rounded-3xl px-7 text-white bg-gradient-to-r from-[#8b2cf5] to-[#a434ff]">
          Products
        </button>

        <button className="btn btn-soft rounded-3xl px-7">
          Cart (2)
        </button>
      </div>


      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">

        {models.map(model => (

          <div
            key={model.id}
            className=" rounded-3xl p-8 relative hover:shadow-lg shadow-sm border-gray-100 border transition-all duration-300"
          >

            {/* Tag */}
            <span className="absolute top-6 right-6 bg-yellow-100 text-orange-500 px-4 py-1 rounded-full text-sm">
              {model.tag}
            </span>


            {/* Icon */}
            <div className="w-16 h-16 rounded-full border flex items-center justify-center mb-6 text-xl">
              {model.icon}
            </div>


            {/* Name */}
            <h2 className="text-2xl font-bold mb-3">
              {model.name}
            </h2>


            {/* Description */}
            <p className="text-gray-500 mb-6">
              {model.description}
            </p>


            {/* Price */}
            <h3 className="text-3xl font-bold mb-6">
              ${model.price}
              <span className="text-gray-400 text-lg">
                /{model.period}
              </span>
            </h3>


            {/* Features */}
            <ul className="mb-8">

              {model.features.map((feature, index) => (

                <li key={index} className="flex gap-2 text-gray-600 mb-2">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>

              ))}

            </ul>


            {/* Button */}
            <button className="w-full py-3 rounded-full text-white bg-gradient-to-r from-[#8b2cf5] to-[#a434ff]">
              Buy Now
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Models;