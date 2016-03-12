## Selection Sort
Today we are going to look at one of the most simplest sorting algorithm - [Selection Sort][]. As it is one of the most simplest it cannot be the most efficient one by its definition. But on the other hand it's a good sorting algorithm to be known in learning purposes.

So let's get started!

### Rules of the Game
Algorithm divides array into two sub-arrays: 

* left syb-array that is already sorted
* right sub-array that is not yet sorted. 

Initially the left sub-array is empty and the right sub-array contains all array elements. Then, algorithm finds the smallest element in the right sub-array and swaps it with the first entry of the array. Thus it starts dividing array into two parts: sub-array with first entry becomes sorted, sub-array with all other elements except first entry stays unsorted.

Then algorithm finds next smallest element, looking only through items in the right unsorted sub-array, and swaps it with the second entry of the array. Now our left sorted sub-array contains two elements in the correct sorted order, all other elements still stay unsorted in the right unsorted sub-array. 

This process is repeated until the moment when unsorted sub-array becomes empty, there is no possibility to select next smallest item. And sorted sub-array contains all array items correctly sorted.

Sounds pretty simple, does not it? As on each iteration we are selecting next smallest item, algorithm is called **Selection Sort**.

### Algorithm Invariants
Here are invariants that you can check during the algorithm implementation.

For any position `i` in the array the following is true:

* all elements to the left of the position `i` are already sorted and fixed, it means that they won't be touched starting from this moment;
* no elements to the right of the position `i` (including element at position `i`) are less than any elements to the left;
* among elements to the right of the position `i` (including element at position `i`) might equal to the element at position `i-1`;
* except element at position `i-1` there is no other elements to the left of the position `i` that can be equals any elements to the right of the position `i` (including element at position `i`);

### Example
Let's exam simple example. Consider we have the following array:
```
[1,4,2,3,5]
```

### Implementation
 First of all we need to have simple routine to swap two elements of the array. As you may notice
 
### Analysis
 
### Summary 
 
[Selection Sort]: https://en.wikipedia.org/wiki/Selection_sort "Selection Sort - Wikipedia"