## Bubble Sort
Today we are going to look at one of the elementary sorting algorithm - [Bubble Sort][]. This is usually the first sorting algorithm taught because it is the easiest one to conceptually understand and implement. But keep in mind that it's also one of the least efficient in practice.

So let's get started!

### Rules of the Game
The basic idea is to compare each pair of adjacent elements and swap them if they are not in the correct order before moving further. This process is repeated until the last pass has no swaps behind. It means that all elements are completely sorted. 

As you will see, it looks like at the end of each pass the *largest* element **bubbles** to the end of the array. Hence, the name of the algorithm - [Bubble Sort][].

### Example
To better understand the algorithm, let's look at simple example. Consider we have the following array:  
![Initial array](images/initial-array.png)

####Iteration #1  

####Iteration #2 

####Iteration #3 

![Sorted array](images/sorted-array.png)

### Algorithm Invariants

### Implementation

### Improvements

### Analysis

### Summary 
That is it for the [Bubble Sort][]. As you can see it's not much efficient. Next time we will look at [Selection Sort Algorithm][next].

[Bubble Sort]: https://en.wikipedia.org/wiki/Bubble_sort "Bubble Sort - Wikipedia"
[sorting-algorithm]: ../../README.md
[in-place]: ../../README.md#in-place-and-not-in-place
[comparison sort]: ../README.md
[next]: ../selection-sort/README.md "Insertion Sort Algorithm"
