import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectProps } from "./types";

function Project({ project, variant }: ProjectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const {
        name,
        img,
        description,
        githubUrl,
        siteUrl,
        mobileImg,
        tabletsImg,
    } = project;

    function close() {
        setIsOpen(false);
    }

    useEffect(() => {
        const openDelay = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(openDelay);
    }, []);

    return (
        <motion.div
            className="project"
            onMouseEnter={() => setIsOpen(true)}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variant}>
            <h2>{name}</h2>
            <div className="project__img">
                <picture>
                    <source
                        media="(max-width: 480px)"
                        srcSet={`${mobileImg}.webp`}
                    />
                    <source
                        media="(max-width: 1024px)"
                        srcSet={`${tabletsImg}.webp`}
                    />
                    <source media="(min-width: 769px)" srcSet={`${img}.webp`} />
                    <img src={`${img}.webp`} alt={`${name} app screenshot`} />
                </picture>
            </div>
            <div
                className={`project__desc ${isOpen ? "open" : ""}`}
                onClick={close}>
                <p>{description}</p>
            </div>
            <div
                className={`project__github ${isOpen ? "open" : ""}`}
                onClick={close}>
                <a href={githubUrl} target="blank">
                    <img src="/github.svg" alt="github icon" />
                    <p>Github</p>
                </a>
            </div>
            <div
                className={`project__website ${isOpen ? "open" : ""}`}
                onClick={close}>
                <a href={siteUrl} target="blank">
                    <img src="/logo_icon.svg" alt="logo icon" />
                    <p>Live Website</p>
                </a>
            </div>
        </motion.div>
    );
}

export default Project;
