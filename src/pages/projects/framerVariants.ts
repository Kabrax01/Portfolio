const DURATION = 1;
const EASE = "easeOut";
const TYPE = "spring";

export const variantLeft = {
    initial: { x: "100%", opacity: 0 },
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
    initial: { x: "-100%", opacity: 0 },
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
