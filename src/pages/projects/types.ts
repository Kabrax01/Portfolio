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
    moveLeft: () => void;
    moveRight: () => void;
};

export interface SliderIndicatorProps {
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    projectId: number;
    index: number;
}
