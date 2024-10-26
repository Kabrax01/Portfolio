export const containerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 3,
        },
    },
    exit: { opacity: 0, transition: { duration: 0.25 } },
};

export const h1Variants = {
    initial: { opacity: 0, y: "-200%" },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
        },
    },
};

export const formVariants = {
    initial: {
        opacity: 0,
        rotateY: "90deg",
    },
    animate: {
        opacity: 1,
        rotateY: 0,
        transition: { duration: 2, staggerChildren: 0.3 },
    },
};

export const SvgVariants = {
    initial: {
        pathLength: 0,
        opacity: 0,
    },
    animate: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 2,
        },
    },
    exit: {
        strokeWidth: 0,
        transition: {
            duration: 1,
        },
    },
};

export const messageVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.25,
        },
    },
    exit: { opacity: 0, transition: { duration: 0.25 } },
};
