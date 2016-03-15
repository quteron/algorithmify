## Insertion Sort
Today we are going to look at yet another elementary sorting algorithm - [Insertion Sort][]. This is typically the third [sorting algorithm][overview] to study in computer science, after [Bubble Sort][bubble-sort] and [Selection Sort][selection-sort]. It's again an [in-place][] [comparison sort][] algorithm that is not actually efficient for large data sets but at some circumstances can perform better than previously discussed two algorithms. 

So let's get started!

### Rules of the Game
The main idea is again to divide array into two parts:

* sorted part at left end; 
* unsorted part at right end.

Initially the sorted part is empty and the unsorted part is the entire list. Then we add the first leftmost element (that is the first entry of the array) of the unsorted part to the sorted section. As an array of one item is always sorted, we just move by one element the boundary of the unsorted part and complete the first step.

Then on the second step we again add the next leftmost element (that is the second entry of the array) of the unsorted part to the sorted part. Now as an array of two elements is not always sorted, we need to put this newly added element at the correct position in the sorted part to keep it sorted: 

* if the new element goes after or equals the last element in the sorted part, then we do nothing and move to the next iteration;  
* if it goes before the last element in the sorted part, then we delete its values (copy it to the temporal variable) and shift the last sorted element into the new vacant spot. We repeat the shift for all elements from the sorted part until reach the one that is less than or equal our memorized value;
* if we reach element in the sorted part that less than or equal memorized value, we push our memorized value on the spot before such element;
* if we reach the start of the array (so we have shifted all sorted elements to the right), we push our memorized value as new first entry in the sorted part of the array. 

This process is repeated until the moment when the unsorted part becomes empty and the sorted part contains all elements of the array correctly sorted.

So on each iteration we **insert** next leftmost element from the unsorted part to the sorted part, hence the name of the algorithm - [Insertion Sort][].

### Example
Let's look at simple example. Consider we have the following array:  
![Initial Array](images/initial-array.png)

####Iteration #1  
We just insert the leftmost element ![Initial Array](images/found-5.png) of the unsorted part to the sorted part and move to the next iteation:  
![First element is sorted](images/first-sorted.png)

####Iteration #2 
Next we add next leftmost element ![Initial Array](images/found-5.png) of the unsorted path to the sorted part:
![Seond element is inserted](images/second-insert.png)

And as it stays at the correct position, we actually do nothing, only moves by one element the boundary of the unsorted part:  
![Initial Array](images/second-sorted.png)

####Iteration #3 
The next *smallest element* that we find in the unsorted part is ![Initial Array](images/found-3.png):  
![Initial Array](images/3th-smallest.png)

And we swap it with the leftmost element (that is the *third* entry of the array) ![Initial Array](images/found-5.png):  
![Initial Array](images/3th-swap.png)

After moving by one element the boundary of the unsorted part, we have **three** elements sorted:  
![Initial Array](images/3th-sorted.png)

####Iteration #4
The next *smallest* element that we find is ![Initial Array](images/found-4.png):  
![Initial Array](images/4th-smallest.png)

And we swap it with the leftmost element (that is the *fourth* entry of the array) ![Initial Array](images/found-5.png):  
![Initial Array](images/4th-swap.png)

And once again moves by one element the boundary of the unsorted part. Now we have **four** elements sorted.:  
![Initial Array](images/4th-sorted.png)
 
####Iteration #5
The last smallest element is ![Initial Array](images/found-5.png) and it already stays at the correct position, as it's the last element in the unsorted part of the array. So we just moves by one element the boundary of the unsorted part and complete sorting:  
![Initial Array](images/sorted-array.png)

Now we have a bigger picture of how this algorithm works. Let's move to its implementation.

### Algorithm Invariants
Based on the discussed example let's define invariants that we need to check during the algorithm implementation for its correct behaviour. As you can see for any position `i` in the array the following should be true:

* all elements to the left of the position `i` are already sorted and fixed, it means that they won't be touched starting from this moment; 
* no elements to the right of the position `i` (including element at position `i`) are less than any elements to the left;
* among elements to the right of the position `i` (including element at position `i`) might be some elements that are equals the element at position `i-1`;
* except element at position `i-1` there is no other elements to the left of the position `i` that can be equals any elements to the right of the position `i` (including element at position `i`).

### Implementation
As you remember we have already defined two auxiliary routines for elements comparison and swaping. To complete implementation of the entire algorithm, we need to have the following:

* inner loop to find next smallest item in the array;
* outer loop to swap found smallest item with the current entry.

That's it, it's really simple as it sounds. Here is the implementation:
```javascript
function sort(array) {
    var n = array.length, 
		i, j, min;

    for (i = 0; i < n; i++) {
        min = i;
        for (j = i + 1; j < n; j++) {
            if (less(array, j, min)) {
                min = j;
            }
        }

        swap(array, i, min);
    }

    return array;
}
```

As you can see we start at position `0` and go till the last position of the array. For each position we are looking for the next smallest element, observing only elements to the right of the current position. That is done to guard our invariant:
> all elements to the left of the position `i` are already sorted and fixed, it means that they won't be touched starting from this moment

As all elements to the left of the current position are *frozen*, we cannot observe them for the smallest one. So we temporary assume that next smallest element is at position `i` (current *cursor* position) and start our inner loop from `i+1` position till the end of the array. Each element on the right of the position `i` we compare with current found smallest element at position `min`. If current observing item is less than we found before, we save its position to the variable `min`. It becomes our new smallest item.  

### Improvements
Even it's a very simple algorithm we can add some improvements to make it even better.

First of all it may happen that next smallest element that we are looking for is already in place, at current position `i`. In this case we are swapping it with itself that sounds silly. Let's add a guard to avoid such redundant exchange:
```javascript
if (i != min) {
    swap(array, i, min);
}
 ```
 
Next, we can even reduce our outer loop by one iteration. As you can see outer loop iterates array till its last element, including this *last element*. But for the last element we don't have any elements to swap with. As it's the last element, there is no element to the right of it to observe, and all elements to the left are already sorted and fixed. So we really have nothing to do there. That is why we can change exit condition for the outer loop by skipping last iteration at all.

Here is our final implementation:
```javascript
function sort(array) {
    var n = array.length,
		i, j, min;

    for (i = 0; i < n - 1; i++) {
        min = i;
        for (j = i + 1; j < n; j++) {
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
Let's think what we can learn from this algorithm.

* **It's in-place algorithm**  
As you can see we don't use any additional memory except one variable to store the position of the smallest element.

* **It's not stable**  
As elements of the array move round because of swaps, it breaks elements relative order. So if array contains some equal values, there is a big chance that their relative order will be broken at the end.

* **Insensitive to the input array state**  
As you can see we iterate through the items of the array looking for the smallest item independently of the initial array state. Even if array is already sorted, we will still look through all elements to the right starting from the first position. It sounds a little bit odd, apparently, we will waste our time. But it's how this algorithm is designed. So this algorithm is **non-adaptive**.
 
* **Minimal number of swaps**  
As you can see we swap array items only in the outer array. So there can be not more than `n-1` exchanges for the array of `n` elements. That means that we have **linear number of swaps**. It's really a good value. No other sorting algorithms can boast of such good performance. In situations in which moving elements is more expensive than comparing then, this algorithm performs better than others.

* **Has O(n^2) complexity**  
As you can see the first swap requires `n-1` comparisons, the second - `n-2`, the third - `n-3`, and so on. This is the series `(n-1) + (n-2) + (n-3) + ... + 1`, which simplifies to `n*(n-1)/2`. This means that this algorithm is `O(n^2)`. This is true for the best, average and worst case because the algorithm is non-adaptive to the initial state of the array. AS we already learned even if array is already sorted, the algorithm will still performs the sam number of comparisons.

You will see later that other [sorting algorithms][overview] have more efficient times than this one.

### Summary 
That is it for the [Insertion Sort][]. As you can see it's not much efficient. Next time we will look at [Merge Sort Algorithm][next].

[Insertion Sort]: https://en.wikipedia.org/wiki/Insertion_sort "Insertion Sort - Wikipedia"
[overview]: ../../README.md
[in-place]: ../../README.md#in-place-and-not-in-place
[comparison sort]: ../README.md
[next]: ../merge-sort/README.md "Merge Sort Algorithm"
[bubble-sort]: ../bubble-sort/README.md "Bubble Sort Algorithm"
[selection-sort]: ../selection-sort/README.md "Selection Sort Algorithm"
