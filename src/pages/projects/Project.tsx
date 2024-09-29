import { useEffect, useState } from "react";
import { ProjectsType } from "../../assets/projects";
import { motion } from "framer-motion";

type ProjectProps = {
    project: ProjectsType;
    variant: {
        initial: {
            x: string;
            opacity: number;
        };
        animate: {
            x: number;
            opacity: number;
            transition: {
                duration: number;
                type: string;
                ease: string;
            };
        };
        exit: {
            scale: number;
            rotate: number;
            opacity: number;
            transition: {
                duration: number;
                type: string;
                ease: string;
            };
        };
    };
};

export function Project({ project, variant }: ProjectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const { name, img, description, githubUrl, siteUrl } = project;

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
            onMouseOver={() => setIsOpen(true)}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variant}>
            <h2>{name}</h2>
            <div className="project__img">
                <img src={img} alt={`${name} app preview image`} />
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
