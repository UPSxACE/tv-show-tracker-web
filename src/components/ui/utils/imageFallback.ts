import type { SyntheticEvent } from "react";

const imageFallback = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/img-fallback.png";
}

export default imageFallback;