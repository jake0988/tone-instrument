import React from "react";
import * as Tone from 'tone'
import SynthImage from "../presentation/SynthImage";

function TonePlayer() {
  const handleClick = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n")
}
    
    return (
        <div className="TonePlayer">
            <SynthImage handleClick={handleClick}/>
        </div>
    )
}

export default TonePlayer