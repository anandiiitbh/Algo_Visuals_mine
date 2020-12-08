


export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  bubbleSortHelper(array.length, auxiliaryArray, animations);
  return animations;
}

function bubbleSortHelper(
  endIdx,
  auxiliaryArray,
  animations
) {
  for (var i=0; i<endIdx-1; i++){
    for (var j=0; j<endIdx-i-1; j++){
    animations.push([0,j,j+1,auxiliaryArray[j],auxiliaryArray[j+1]]);
  if (auxiliaryArray[j] > auxiliaryArray[j+1]){
            animations.push([1,j,j+1,auxiliaryArray[j],auxiliaryArray[j+1]]);
            var temp = auxiliaryArray[j];
            auxiliaryArray[j] = auxiliaryArray[j+1];
            auxiliaryArray[j+1] = temp;
        }
    animations.push([2,j,j+1,auxiliaryArray[j],auxiliaryArray[j+1]]);

    }    
  }
}

// function doMerge(
//   mainArray,
//   startIdx,
//   middleIdx,
//   endIdx,
//   auxiliaryArray,
//   animations
// ) {
//   let k = startIdx;
//   let i = startIdx;
//   let j = middleIdx + 1;
//   animations.push([startIdx, endIdx]);
//   while (i <= middleIdx && j <= endIdx) {
//     if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//       animations.push([k, auxiliaryArray[i]]);
//       mainArray[k++] = auxiliaryArray[i++];
//     } else {
//       animations.push([k, auxiliaryArray[j]]);
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }
//   while (i <= middleIdx) {
//     animations.push([k, auxiliaryArray[i]]);
//     mainArray[k++] = auxiliaryArray[i++];
//   }
//   while (j <= endIdx) {
//     animations.push([k, auxiliaryArray[j]]);
//     mainArray[k++] = auxiliaryArray[j++];
//   }
// }
