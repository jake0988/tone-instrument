import React from "react";
import * as Tone from 'tone'
import SynthImage from "../presentation/SynthImage";

function TonePlayer() {
    const synth = new Tone.Synth().toDestination();
    
    return (
        <div className="TonePlayer">
            <SynthImage synth={synth}/>
        </div>
    )
}

export default TonePlayer