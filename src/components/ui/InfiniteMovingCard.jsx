import { clientReviews } from "../../constants";
import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <>
      (
      <section className="c-space mb-4 my-0 md:my-16 lg:my-16">
        <h3 className="head-text mb-10">Hear from My Clients</h3>
        <div
          ref={containerRef}
          className={cn(
            "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
              start && "animate-scroll ",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {clientReviews.map((item, idx) => (
              <li
                className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] bg-black-300 bg-opacity-50"
                key={item.name}
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] "
                  ></div>
                  <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {item.review}
                  </span>
                  <div className="client-content">
                    <div className="flex gap-3">
                      <img
                        src={item.img}
                        alt="reviewer"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-white-800">
                          {item.name}
                        </p>
                        <p className="text-white-600 md:text-base text-sm font-light">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>
      )
    </>
  );
};

export default InfiniteMovingCards;

// import React from 'react'

// const InfiniteMovingCard = () => {
//   return (
//     <div className="text-white-800">
//       helooooooooooooooooooooooooooooooooooooooooo
//     </div>
//   );
// };

// export default InfiniteMovingCard;
