import React  from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CursorAnimated() {
    return (
        <AnimatedCursor 
            innerSize={12}
            outerSize={20}
            color="0,255,255"
            outerAlpha={0.1}
            innerScale={1.4}
            outerScale={5}
            trailingSpeed={4}
        />
    );
}