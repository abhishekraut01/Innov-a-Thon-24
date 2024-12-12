import React from 'react';
import MagneticGSAP from './MagneticGSAP';

const Navbar = () => {
  const smoothScroll = (target) => {
    const startPosition = window.pageYOffset;
    const distance = target - startPosition;
    const duration = 1000; // Duration in milliseconds
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className='relative px-4 pt-1 pr-3'>
      <div className='p-4 fixed z-50'>
        <img className='w-[4vw]' src="public/images/lobo.png" alt="" />
      </div>
      <div className='text-[#B3C8CF] tracking-wide font-[font7] text-[2.1vh] flex justify-end mr-44 pt-1 m-6 space-x-8'>
          <ul className="flex text-gray-400 uppercase font-bold ">
            {[
              {[
                { name: "About", scrollPercentage: 0 },
                { name: "prizes", scrollPercentage: 20 },
                { name: "sponsors", scrollPercentage: 40 },
                { name: "FAQ", scrollPercentage: 60 }
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative px-4 py-2 -mt-2 cursor-pointer overflow-hidden transition-colors duration-300 hover:text-white group"
                  onClick={() => smoothScroll(window.innerHeight * (item.scrollPercentage / 100))}
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-1  w-[90%] h-[2px] bg-[#006A67] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"
                  ></span>
                </li>
              ))}
            ].map((item, index) => (
              <li
                key={index}
                className="relative px-4 py-2 -mt-2 cursor-pointer overflow-hidden transition-colors duration-300 hover:text-white group"
              >
                {item}
                <span
                  className="absolute bottom-0 left-1  w-[90%] h-[2px] bg-[#006A67] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"
                ></span>
              </li>
            ))}
          </ul>
        <span className="overflow-hidden whitespace-nowrap">
          <button className='px-3 -mt-[7px] border-none bg-[#41B3A2] ml-4 py-1 pb-[0.5vh] overflow-hidden text-black font-semibold rounded-full z-50 fixed hover:text-white'>
            <span className="inline-block animate-marquee font-[font4] text-[2.3vh]">Register Here</span>
          </button>
        </span>
        <style jsx>{`
          .animate-marquee {
            display: inline-block;
            animation: marquee 8s linear infinite; /* Increased duration for smoother transition */
          }

          @keyframes marquee {
            0% {
              transform: translateX(110%);
            }
            100% {
              transform: translateX(-110%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Navbar;