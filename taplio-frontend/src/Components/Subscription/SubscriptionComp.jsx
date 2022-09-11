import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StripeCheckoutButton from "../StripeCheckoutButton/StripeCheckoutButton";

const SubscriptionComp = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-full  ">
      <h1 className="mt-20 text-5xl font-semibold text-center">
        Get the social presence <br /> you deserve
      </h1>

      <div className="mt-32 text-[14px]">
        <div className=" flex items-center my-6">
          <CheckCircleIcon className="mr-2" />
          <span>Get inspired with the best posts on your topics</span>
        </div>
        <div className=" flex items-center my-6">
          <CheckCircleIcon className="mr-2" />
          <span>New AI generated post every day</span>
        </div>
        <div className=" flex items-center my-6">
          <CheckCircleIcon className="mr-2" />
          <span>Generate AI variations of your favorite posts</span>
        </div>
        <div className=" flex items-center my-6">
          <CheckCircleIcon className="mr-2" />
          <span>News from your industry picked by AI</span>
        </div>
        <div className=" flex items-center my-6">
          <CheckCircleIcon className="mr-2" />
          <span>Schedule all your content in 1 place</span>
        </div>
        <div className=" flex items-center my-6">
          <CheckCircleIcon className="mr-2" />
          <span>Post automations you have never seen before</span>
        </div>
        <div className=" flex items-center my-6">
          <CheckCircleIcon className="mr-2" />
          <span>Engage with relevant posts to grow faster</span>
        </div>
        <div className=" flex items-center my-6">
          <CheckCircleIcon className="mr-2" />
          <span>Export and manage lists of people</span>
        </div>
        <div className=" flex items-center my-6">
          <CheckCircleIcon className="mr-2" />
          <span>Send personalized bulk DMs</span>
        </div>
        <StripeCheckoutButton />
        {/* <button className="py-3 px-4 hover:bg-[#1480c3] text-white rounded-md mt-10 ease-in-out duration-100 font-semibold w-full bg-[#1DA1F2] uppercase">
          start 7-days free trial
        </button> */}

        <div className=" text-lg mt-10 flex flex-col">
          <span>
            Then <sup className="line-through">$49</sup> $39 / month{" "}
            <sub> (launch offer)</sub>
          </span>

          <span className="mt-7 italic text-center text-sm">
            30-day money-back guarantee. <br /> no questions asked.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionComp;
