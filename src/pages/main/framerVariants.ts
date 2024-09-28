export const imgVariants = {
    initial: { opacity: 0, y: "100%" },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
        },
    },
};

export const textVariants = {
    initial: { opacity: 0, x: "-20rem" },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};

export const listVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
};

export const containerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.2,
            staggerChildren: 0.2,
        },
    },
};

export const containerVariants2 = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: 1,
            staggerChildren: 0.2,
        },
    },
};
