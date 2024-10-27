import "./projectsSlider.scss";
import projects from "../../assets/projects";
import Project from "./Project";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { variantLeft, variantRight } from "./framerVariants";
import SliderIndicator from "./SliderIndicator";

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
            <div className="projects__container">
                <div className="slider__indicator">
                    {projects.map((el) => {
                        return (
                            <SliderIndicator
                                setIndex={setIndex}
                                projectId={el.id}
                                index={index}
                                key={el.id}
                            />
                        );
                    })}
                </div>
                <button className="arrow" onClick={moveLeft}>
                    <img
                        src={`${
                            import.meta.env.BASE_URL
                        }./arrow-left-white.png`}
                        alt="arrow left"
                    />
                </button>
                <AnimatePresence mode="wait">
                    <Project
                        project={projects[index]}
                        variant={variant}
                        moveLeft={moveLeft}
                        moveRight={moveRight}
                        key={projects[index].id}
                    />
                </AnimatePresence>

                <button className="arrow" onClick={moveRight}>
                    <img
                        src={`${
                            import.meta.env.BASE_URL
                        }./arrow-right-white.png`}
                        alt="arrow right"
                    />
                </button>
            </div>
        </motion.div>
    );
}

export default Projects;
