import { ProjectsType } from "../../assets/projects";

export type ProjectProps = {
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
