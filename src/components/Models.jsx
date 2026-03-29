import React, { use } from "react";

const Models = ({ modelPromise }) => {
  const modelsArray = use(modelPromise);
  console.log(modelsArray);

  return <div></div>;
};

export default Models;
