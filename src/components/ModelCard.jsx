import React from "react";
import { useState } from "react";
import { FaFireAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubscribed, setisSubscribed] = useState(false);

  const handleSubscription = () => {
    setisSubscribed(true);
    const isFound = carts.find((item) => item.id === model.id);
    if (isFound) {
      alert("Item already in cart");
      return;
    }
    setCarts([...carts, model]);
  };
  return (
    <div className=" border border-zinc-400 shadow-md rounded-lg">
      <div className="flex justify-center items-center h-44 w-full bg-gray-50 p-8 rounded-lg relative group">
        <img
          className="max-h-full max-w-full object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-120"
          src={model.image}
          alt=""
        />
        <div
          className={`absolute top-3 right-3 badge ${
            model.status === "popular"
              ? "badge-secondary"
              : model.status === "favourite"
                ? "badge-warning"
                : "badge-success"
          }`}
        >
          {model.status === "popular" ? (
            <FaFireAlt />
          ) : model.status === "favourite" ? (
            <FaHeart />
          ) : (
            <CiStar />
          )}
          {model.status}
        </div>
      </div>
      <div className="p-6 space-y-3">
        <h1>{model.title}</h1>
        <p
          className={`text-gray-600 text-sm mt-2 ${isExpanded ? "" : "line-clamp-1"}`}
        >
          {" "}
          {model.description}{" "}
        </p>{" "}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 text-xs font-bold mt-1 hover:underline"
        >
          {" "}
          {isExpanded ? "Show Less" : "Read More"}{" "}
        </button>
        <p>
          {model.price === 0 ? (
            <span className="font-bold text-4xl text-green-500">Free</span>
          ) : (
            <span>
              <span className="font-bold text-4xl">${model.price}</span>
              /month
            </span>
          )}
        </p>
        <button
          onClick={handleSubscription}
          className="btn btn-secondary w-full rounded-lg"
        >
          {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
