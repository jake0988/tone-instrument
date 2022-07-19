import React from "react";
import Keys from "./Keys";
import * as Tone from 'tone'

function SynthImage({synth}) {
  let mouseDown = false;
  const now = Tone.now()
  function noteDown(e, pitch) {

    if (e) {
      synth.triggerAttack(pitch, now);
    }
  }
   
  function noteUp(e, pitch) {
    if (e) {
      // console.log(pitch)
      synth.triggerRelease(now);
    }
  }

  function upOrDown(e, note) {
    if (e === "down") {
      return noteDown(e, note);
    } else if (e === "up") {
      return noteUp(e, note);
    }
  }

  function mouseClick(e) {
    mouseDown = true;
    upOrDown("down", e.target.id);
  }

  function mouseOverClick(e) {
    if (mouseDown === true) {
      upOrDown("down", e.target.id);
    }
  }

  function mouseUp(e) {
    mouseDown = false;
    upOrDown("up", e.target.id);
  }

  function mouseOut(e) {
    upOrDown("up", e.target.id);
  }

    return  (
        <div>
         <Keys mouseClick={mouseClick} mouseOverClick={mouseOverClick} mouseUp={mouseUp} mouseOut={mouseOut}/>
        </div>
      );
   
}

export default SynthImage;