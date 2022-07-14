import React from "react";
import SynthImage from "./synth_ui/presentation/SynthImage";
import TonePlayer from "./synth_ui/container/TonePlayer";

function Main() {
    return (
    <div className="Main">
        <SynthImage />
        <TonePlayer />
    </div>
    )
}

export default Main;