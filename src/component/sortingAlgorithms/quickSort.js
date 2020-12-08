


export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSort(auxiliaryArray,0, auxiliaryArray.length -1, animations);
    return animations;
  }
  

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right, animations) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
        animations.push([0,Math.floor((right + left) / 2),Math.floor((right + left) / 2),items[left],items[right]]);
        // animations.push([0,left , right]);
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        animations.push([1,left,i,items[left],items[i]]);
        while (items[j] > pivot) {
            j--;
        }
        animations.push([2,right,j,items[right],items[j]]);
    if (i <= j) {
            animations.push([3,i,j,items[i],items[j]]);
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    animations.push([4,left,right]);
    return i;
}

function quickSort(items, left, right,animations) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1,animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right,animations);
        }
    }
    return items;
}