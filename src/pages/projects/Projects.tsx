import "./projects.scss";
import projects from "../../assets/projects";
import { Project } from "./Project";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const duration = 1;
const ease = "easeOut";
const type = "spring";

const variantLeft = {
    initial: { x: "100%", opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: duration,
            type: type,
            ease: ease,
        },
    },
    exit: {
        scale: 0,
        rotate: 360,
        opacity: 0,
        transition: {
            duration: duration,
            type: type,
            ease: ease,
        },
    },
};

const variantRight = {
    initial: { x: "-100%", opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: duration,
            type: type,
            ease: ease,
        },
    },
    exit: {
        scale: 0,
        rotate: 360,
        opacity: 0,
        transition: {
            duration: duration,
            type: type,
            ease: ease,
        },
    },
};

function Projects() {
    const [index, setIndex] = useState(0);
    const [variant, setVariant] = useState(variantLeft);

    function moveRight() {
        if (index === 0) {
            setIndex(projects.length - 1);
        } else {
            setIndex((prev) => prev - 1);
            setVariant(variantRight);
        }
    }

    function moveLeft() {
        if (index === projects.length - 1) {
            setIndex(0);
        } else {
            setIndex((prev) => prev + 1);
            setVariant(variantLeft);
        }
    }

    return (
        <div className="projects">
            <img
                className="arrow"
                src="./arrow-left-white.png"
                alt="arrow left"
                onClick={moveLeft}
            />
            <AnimatePresence mode="wait">
                <Project
                    project={projects[index]}
                    variant={variant}
                    key={projects[index].id}
                />
            </AnimatePresence>
            <img
                className="arrow"
                src="./arrow-right-white.png"
                alt="arrow right"
                onClick={moveRight}
            />
        </div>
    );
}

export default Projects;
