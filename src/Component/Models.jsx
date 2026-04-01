import { useEffect, useState } from "react";
import ModelCard from "./modelCard";

const Models = ({ carts, setCarts }) => {

  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch("/models.json")
      .then(res => res.json())
      .then(data => setModels(data));
  }, []);

  return (
    <div className="p-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {models.map(model => (
          <ModelCard
            key={model.id}
            model={model}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;