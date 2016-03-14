/*
 * Implementation of the Bubble Sort algorithm using JavaScript programming language.
 * Copyright (c) 2016 Quteron
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * Swaps two elements in an array by their indexes.
 * @param {Array} array original array
 * @param {int} i index of the first element to swap
 * @param {int} j index of the second element to swap
 * @return {void}
 */
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

/**
 * Checks whether first passed element is less than second passed element.
 * @param array original array
 * @param i index of the first element
 * @param j index of the second element
 * @returns {boolean} if true if first element is less than second, otherwise - false.
 */
function less(array, i, j) {
    return array[i] < array[j];
}

/**
 * Sorts in-place an array using bubble sort algorithm.
 * @param {Array} array original array to be sort
 * @param lo index of the first element to be sorted
 * @param hi index of the last element to be sorted
 * @return {Array} sorted array
 */
function sort(array, lo, hi) {
    var i, swapped;

    if (lo === undefined) {
        lo = 0;
    }

    if (hi === undefined) {
        hi = array.length - 1;
    }

    do {
        swapped = false;
        for (i = lo; i < hi; i++) {
            if(less(array, i + 1, i)) {
                swap(array, i + 1, i);
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}