import "./main.scss";
import technologies from "../../assets/technologies";
import { motion } from "framer-motion";
import {
    textVariants,
    imgVariants,
    listVariants,
    containerVariants,
    containerVariants2,
    h3Variants,
} from "./framerVariants";

function Main() {
    return (
        <motion.div className="main">
            <motion.div
                className="main__text"
                variants={containerVariants}
                initial="initial"
                animate="animate">
                <motion.h1 variants={textVariants}>Arnold Rogalski</motion.h1>
                <motion.h2 variants={textVariants}>
                    Frontend Developer
                </motion.h2>
                <motion.p variants={textVariants}>
                    With a solid foundation in frontend technologies I am
                    excited to embark on my professional journey as a frontend
                    developer, ready to tackle new challenges, learn and grow
                    alongside a supportive team, and contribute to the success
                    of innovative web projects.
                </motion.p>
                <div className="main__tech">
                    <motion.h3
                        variants={h3Variants}
                        initial="initial"
                        animate="animate">
                        Tech stack:
                    </motion.h3>
                    <motion.ul
                        variants={containerVariants2}
                        initial="initial"
                        animate="animate">
                        {technologies.map((tech) => {
                            return (
                                <motion.li
                                    variants={listVariants}
                                    className="technologies"
                                    key={tech.name}>
                                    <img
                                        src={tech.img}
                                        alt={`${tech.name} icon`}
                                    />
                                    <p>{tech.name}</p>
                                </motion.li>
                            );
                        })}
                    </motion.ul>
                </div>
            </motion.div>
            <motion.img
                className="main__photo"
                src="./no-bg-2.png"
                alt="Arnold Rogalski picture"
                variants={imgVariants}
                initial="initial"
                animate="animate"
            />
        </motion.div>
    );
}

export default Main;
