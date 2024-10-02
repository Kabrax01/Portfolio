import "./projects.scss";
import projects from "../../assets/projects";
import Project from "./Project";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { variantLeft, variantRight } from "./framerVariants";

function Projects() {
    const [index, setIndex] = useState(0);
    const [variant, setVariant] = useState(variantLeft);

    function moveRight() {
        setVariant(variantRight);
        if (index === 0) {
            setIndex(projects.length - 1);
        } else {
            setIndex((prev) => prev - 1);
        }
    }

    function moveLeft() {
        setVariant(variantLeft);
        if (index === projects.length - 1) {
            setIndex(0);
        } else {
            setIndex((prev) => prev + 1);
        }
    }

    return (
        <motion.div
            className="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}>
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
        </motion.div>
    );
}

export default Projects;
