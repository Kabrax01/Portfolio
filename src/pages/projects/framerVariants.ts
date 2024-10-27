const DURATION = 0.5;
const EASE = "linear";
const TYPE = "spring";

export const variantLeft = {
    initial: { x: "50%", opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: DURATION,
            type: TYPE,
            ease: EASE,
        },
    },
    exit: {
        scale: 0,
        rotate: 360,
        opacity: 0,
        transition: {
            duration: DURATION,
            type: TYPE,
            ease: EASE,
        },
    },
};

export const variantRight = {
    initial: { x: "-50%", opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: DURATION,
            type: TYPE,
            ease: EASE,
        },
    },
    exit: {
        scale: 0,
        rotate: 360,
        opacity: 0,
        transition: {
            duration: DURATION,
            type: TYPE,
            ease: EASE,
        },
    },
};
