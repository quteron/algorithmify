## Selection Sort
Today we are going to look at one of the most simplest sorting algorithm - [Selection Sort][]. As it is one of the most simplest it cannot be the most efficient one by its definition. But on the other hand it's a good sorting algorithm to be known in learning purposes.

So let's get started!

### Rules of the Game
Algorithm divides array into two sub-arrays: 

* left syb-array that is already sorted;
* right sub-array that is not yet sorted. 

Initially the left sub-array is empty and the right sub-array contains all array elements. Then algorithm finds the smallest element in the right sub-array and swaps it with the first entry of the array. Thus it starts dividing array into two parts: 

* sub-array with first entry becomes sorted;
* sub-array with all other elements except first entry stays unsorted.

Then algorithm finds next smallest element, looking only through items in the right, unsorted, sub-array, and swaps it with the second entry of the array. Now our left, sorted, sub-array contains two elements in the correct sorted order, all other elements still stay unsorted in the right, unsorted, sub-array. 

This process is repeated until the moment when unsorted sub-array becomes empty, there is no possibility to select next smallest item. And sorted sub-array contains all array items correctly sorted.

Sounds pretty simple, does not it? As on each iteration we are **selecting** next smallest item, algorithm is called [Selection Sort][].

### Example
Let's look at simple example. Consider we have the following array:
```
[1, 4, 2, 3, 5]
```
**Iteration #1**  
The first smallest element that we find is `1`. As it stays at the correct position, we do nothing. 

**Iteration #2**  
The next smallest element that we find is `2`. So we swap it with the second entry of the array - `4`:
```
[1, 2, 4, 3, 5]
```
**Iteration #3**  
The next smallest element that we find is `3`. So we swap it with the third entry of the array - `4`:
```
[1, 2, 3, 4, 5]
```
**Iteration #4**  
The next smallest element that we find is `4`. As it stays at the correct position, we do nothing.

**Iteration #5**  
The last smallest element is `5`, it also stays at the correct position, we do nothing. 

Here is our sorted output:
```
[1, 2, 3, 4, 5]
```

### Algorithm Invariants
Here are invariants that you can check during the algorithm implementation.

For any position `i` in the array the following is true:

* all elements to the left of the position `i` are already sorted and fixed, it means that they won't be touched starting from this moment;
* no elements to the right of the position `i` (including element at position `i`) are less than any elements to the left;
* among elements to the right of the position `i` (including element at position `i`) might be some elements that are equals the element at position `i-1`;
* except element at position `i-1` there is no other elements to the left of the position `i` that can be equals any elements to the right of the position `i` (including element at position `i`).

### Implementation
First of all we need to create simple routine to swap two elements of the array. As you may notice on each outer iteration we have a swap to move next smallest element to the left sub-array. Here is the code for this step:
 ```javascript
 function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
 ```

Next, to find the smallest item in the array, we need to compare elements between each other. Let's create for this step also a separate routine:
```javascript
function less(array, i, j) {
    return array[i] < array[j];
}
```

All auxiliry blocks are ready, we have only to right the sorting function itself. Here we will need to have two loops:

* inner loop to find next smallest item in the array;
* outer loop to swap found smallest item with the current entry.

Here is the implementation:
```javascript
function sort(array) {
    var i, j, min;

    for (i = 0; i < array.length; i++) {
        min = i;
        for (j = i + 1; j < array.length; j++) {
            if (less(array, j, min)) {
                min = j;
            }
        }

        swap(array, i, min);
    }

    return array;
}
```

As you can see we start at position `0` and go till the last position of the array. For each position we are looking for the next smallest element, observing only elements to the right of the current position. That is done to guard our invariants:
> all elements to the left of the position `i` are already sorted and fixed, it means that they won't be touched starting from this moment

As all elements to the left of the current position are frozen, we cannot observe them for the smallest one. So we temporary assume that next smallest element is at position `i` and start our search from `i+1` position till the end of the array. Each element on the right of the position `i` we compare with current found smallest element at position `min`. If current observing item is less than we found before, we save its position to the variable `min`. It becomes our new smallest item.  

### Improvements
Even it's a very simple algorithm we can add some improvements to our implementation to avoid some redundant steps and iterations.

First of all it may happen that next smallest element that we are looking for is already in place, at current position `i`. In this case we are swapping it with itself that sounds silly. Let's add a guard to avoid such redundant exchange:
```javascript
if (i != min) {
    swap(array, i, min);
}
 ```
 
Next, we can even reduce our outer loop by one iteration. As you can see outer loop iterates array till its last element, including this last element. But for the last element we don't have any elements to swap with. As it's the last element, there is no element to the right to look for the next smallest, and all elements to the left are already sorted and fixed. So we really have nothing to do there. That is why we can change exit condition for the outer loop by skipping last element at all.

Here is our final implementation:
```javascript
function sort(array) {
    var i, j, min;

    for (i = 0; i < array.length - 1; i++) {
        min = i;
        for (j = i + 1; j < array.length; j++) {
            if (less(array, j, min)) {
                min = j;
            }
        }

        if (i != min) {
            swap(array, i, min);
        }
    }

    return array;
}
```

### Analysis
Let's think what we can learn from this algorithm. Here is its major characteristics:

* **Has O(n2) complexity**  
    As we have two loops nested one within other, it is O(n2) complexity. That means this lagorithm is not something you are likely to use in a real-world environment, unfortunately.
* **Insensitive to the input array state**  
    As you can see we iterate through the items of the array looking for the smallest item independently of the initial array state. Even if array is already sorted and the next smallest item is at current position `i`, we will still look through all elements to the irght of the position `i`. It sounds a litle bit odd, apparently, we will waste our time. But it's how this algorithm is designed. 
 
* **Minimal number of exchanges**  
    As you can see we iterate array items only in the outer array. So there can be not more than `N` exchanges for the `N` elements of the array, that means that we have linear number of exchanges. It's really a good value. No other sorting algorithms can boast of such good performance.

### Summary 
That is it for the [Selection Sort][]. As you can see it's not much efficient, but it's a good point to start our journey to the world of sorting algorithms. Next time we will look at [Insertion Sort Algorithm][next].

[Selection Sort]: https://en.wikipedia.org/wiki/Selection_sort "Selection Sort - Wikipedia"
[next]: ../insertion-sort/Insertion-Sort.md "Insertion Sort Algorithm"
