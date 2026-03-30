import React, { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise }) => {
  const modelsArray = use(modelPromise);

  return (
    <>
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="font-bold text-5xl text-center mb-5">
          Choose Your AI Model
        </h1>
        <p className="font-medium text-zinc-400 text-3xl text-center mb-10">
          One subscription gives you access to all frontier AI models
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 items-start">
          {modelsArray.map((model) => (
            <ModelCard key={model.id} model={model}></ModelCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Models;
