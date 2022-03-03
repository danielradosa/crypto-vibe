import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-white text-white';

const Welcome = () => {
  const connectWallet = () => {};

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-gradient py-1">
            Send Crypto <br /> and Vibe
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the world of crypto. Buy and sell crypto online easily on
            CRYPTOVIBE.
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#ffdd94] 
            p-3 rounded-full cursor-pointer hover:bg-[#eccf90] font-semibold"
          >
            Connect Wallet
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>
                Reliability
            </div>
            <div className={`2xl ${commonStyles}`}>
                Functionality
            </div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>
                Vibes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
