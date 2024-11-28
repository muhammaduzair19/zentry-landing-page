import React, { useRef } from "react";
import AnimatedTitle from "./animated-title";
import gsap from "gsap";
import RoundedCorners from "./rounded-corners";
import Button from "./button";

const Story = () => {
    const frameRef = useRef("null");
    const handleMouseLeave = () => {
        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: "power1.inOut",
        });
    };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerX) / centerY) * -10;
        const rotateY = ((x - centerY) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };
    return (
        <section
            id="story"
            className="min-h-dvh w-screen bg-black text-blue-50"
        >
            <div className="flex size-full flex-col  items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    the multiversal ip world
                </p>
                <div className="relative size-full">
                    <AnimatedTitle
                        title={
                            "the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
                        }
                        id="#story"
                        containerClass={
                            "mt-5 pointer-events-none z-10 mix-blend-difference relative"
                        }
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content ">
                                <img
                                    src="/img/entrance.webp"
                                    alt="Entrance"
                                    className="object-contain"
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                />
                            </div>
                        </div>
                        <RoundedCorners />
                    </div>
                </div>
                <div className="-mt-80 justify-center flex w-full md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center text-violet-50 md:text-start font-circular">
                            Where realms converge, lies Zentry and the boundless
                            pillar. Discover its secrets and shape your fate
                            amidst infinite opportunities.
                        </p>
                        <Button
                            id={"realm-buttom"}
                            title={"discover prologue"}
                            containerClass={"mt-5"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
