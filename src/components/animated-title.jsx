import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ containerClass, title }) => {
    const containerRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                },
            });
            titleAnimation.to(".animated-word", {
                opacity: 1,
                transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
                ease: "power1.inOut",
                stagger: 0.02,
            });
            return () => ctx.revert();
        }, containerRef);
    }, []);
    return (
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
            {title.split("<br />").map((line, idx) => (
                <div
                    className="flex-center max-w-full flex-wrap px-10 md:gap-3 gap-2"
                    key={idx}
                >
                    {line.split(" ").map((word, i) => (
                        <span
                            key={i}
                            className="animated-word"
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AnimatedTitle;
