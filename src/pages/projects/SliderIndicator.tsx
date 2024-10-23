import { SliderIndicatorProps } from "./types";

function SliderIndicator({ setIndex, projectId, index }: SliderIndicatorProps) {
    return (
        <button
            className="slider__indicator__button"
            onClick={() => setIndex(projectId - 1)}
            style={{
                backgroundColor: index === projectId - 1 ? "black" : "white",
            }}></button>
    );
}

export default SliderIndicator;
