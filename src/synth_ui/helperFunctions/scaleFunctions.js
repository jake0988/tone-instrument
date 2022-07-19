const octaveOrigFreq = (octave, fineTuning) => {
    return octave * (155.56 + fineTuning);
}

const origFreq = 155.56

const scaleObject = {
    temperament: {
      equal: [
        1,
        Math.pow(2, 1 / 12),
        Math.pow(2, 2 / 12),
        Math.pow(2, 3 / 12),
        Math.pow(2, 4 / 12),
        Math.pow(2, 5 / 12),
        Math.pow(2, 6 / 12),
        Math.pow(2, 7 / 12),
        Math.pow(2, 8 / 12),
        Math.pow(2, 9 / 12),
        Math.pow(2, 10 / 12),
        Math.pow(2, 11 / 12),
        2,
        2 * Math.pow(2, 1 / 12),
        2 * Math.pow(2, 2 / 12),
      ]
    }
}

export function scaleConverter(arr, origFreq) {
  const convertedArr = [];
  for (let i = 0; i < arr.length; i++) {
    convertedArr.push(arr[i] * origFreq);
  }
  return convertedArr;
}
