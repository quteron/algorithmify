## Sorting Algorithms
[Sorting algorithms][sorting-algorithm] are one of the cornerstones in computer science.  They play a major role in commercial data processing and in modern scientific computing. Their importance lies in the fact that search process of any data can be drastically optimized to a very high level if this data is originally sorted. Why is it so? Let's dig into the subject.

### Get Started
First of all let's start with the definition what is [sorting][]:

> [Sorting][] is the process of rearranging a sequence of items so as to put them in some logical order. It can be numerical, [lexicographical][] order or some custom defined one. 

And if you will look around you will see that actually [sorting][] is used everywhere, almost all information that you deal with on day-to-day manner is somehow ordered.

Let's see few examples:

* **Dictionary**  
Any dictionary lists words in an alphabetical order so that searching of any word becomes much easier and fast.
    
* **Telephone book**  
A telephone book keeps telephone numbers of people sorted by their names so that one can easily find necessary phone by its owner's name.
 
* **Bus Timetable**  
Bus arrivals are always displayed in the order of arrival time that makes it easy to catch the next bus. It will be really strange to display these records in a random order!
    
* **Student Records**  
Students records are always displayed in some order too. It can be lexicographical order to have list of students entered the class. It can be order based on student rank after final exams. 

* **Shopping Catalogue**  
Usually all product lists are shown ordered by some attribute. It can be the popularity among other customers, it can be the price - from the cheapest to most expensive or vice versa, it can be the play date - for theater, cinema tickets, etc.  
    
* **ToDo Lists**  
Well, these items, in theory, should be listed based on their priority - the most important ones go first (I said in theory!). 
    
These examples show that almost all data on the Earth is ordered, and this in its turn means that almost all computer programs have some sorting algorithm inside, implemented manually or used as a part of third-party library. 

That is why an efficient [sorting algorithm][sorting-algorithm] is a very important thing. I have doubts that you would agree to wait 5 minutes to sort products by price or cinema tickets by play time. But this is only one side on the thing. The other side is that from computer science an efficient [sorting algorithm][sorting-algorithm] is very important for optimizing the use of other algorithms that would not be so efficient or even developed without [sorting].

### Classification
As you have already guessed there are lots of [sorting algorithms][sorting-algorithm] and to prevent being lost in such complicated *"sorting"* world, let's define some classification for [sorting algorithms][sorting-algorithm]. 

#### Stable and Not Stable
Each [sorting algorithm][sorting-algorithm] can be either *stable* or *not stable* but not both at once.

* **Stable Algorithm**  
A stable [sorting algorithm][sorting-algorithm] maintains the relative order of the elements with equal values. It means that during sorting such algorithm won't rearrange elements relative to each other.

* **Not Stable Algorithm**  
A not stable [sorting algorithm][sorting-algorithm] in its turn does not maintain the relative order of the elements with equal values. It means that during sorting such algorithm may rearrange equal elements relative to each other.

#### In-Place and Not In-Place
This attribute defines whether a [sorting algorithm][sorting-algorithm] needs auxiliary amount of memory enough to store copied version of initial array or not.

* **In-Place Algorithm**  
It means that such [sorting algorithm][sorting-algorithm] does not need to store several copies of initial array to complete his work, but may still need the permanent number of variables to store some array elements. The key is that amount of memory that this algorithm needs additionally is **permanent** and does not depend on array size.

* **Not In-Place Algorithm**
This algorithm in its turn does need auxiliary memory to store some copies of initial array (or sub-arrays of initial array) to complete its work. It means that such algorithm does depend on initial array size.

#### Adaptive and Non-Adaptive
It's another attribute defines how [sorting algorithm][sorting-algorithm] performs when array is partially sorted, will algorithm take this fact into account or not.

* **Addaptive Algorithm**  
A [sorting algorithm][sorting-algorithm] is said to be *adaptive* if it takes advantage of partially sorted array. This means that such algorithm will try not to touch already sorted elements and sort only the rest once. Thus, increasing its execution time.

* **Non-Adaptive Algorithm**  
A [sorting algorithm][sorting-algorithm] is said to be *non-adaptive* if it does not take into account the elements that are already sorted. This means that such algorithm will behaviour like the array is absolutely unsorted and will try to force each single element to be put at the proper place.

#### Recursive and Non-Recursive
This characteristic is very simple, all that it means is that should algorithm be implemented using [recursion][] or not, or it may be implemented in both ways with no difference to its definition.

#### Comparison and Non-Comparison
This attribute defines whether or not a comparison sort is used. A comparison [sorting algorithms][sorting-algorithm] examines elements in the array **only** by comparing two elements with a **comparison operator**. A non-comparison [sorting algorithms][sorting-algorithm] uses a **non-comparison** operator to examine elements and put them in a proper order.

### Rules of the Game
As we have learned by this moment the objective of [sorting][] is to rearrange items in some order. To accomplish this task each [sorting algorithms][sorting-algorithm] can use either *comparison operator* (be a *comparison* algorithm) or not (be a *non-comparison* algorithm). Starting from this moment we will be talking only about **comparison** algorithms as they are most used in computer scince.

To proceed with further discussion let's learn some other important terms.

TBD - comparison model, base operations, time complexity

### Important terms
As we have learned by this moment the objective of [sorting][] is to rearrange items in some order. But what is this order?

In computer science [order][] of items means that these items are placed in sequence based on the selected rule. And based of this rule usually define the following [orders][order] of items: 

* **Increasing Order**  
A sequence of elements is said to be in an *increasing order* if the next following element is greater that the previous one. This order occurs when the sequence contains only unique values. For instance, 1, 2, 3, 4 are in an *increasing order*, as every next element is greater than the previous one.

* **Non-Increasing Order**  
It's similar to *increasing* order, the only difference is that the next following element may be equal to the previous one. This order occurs when the seqience contains duplicate values. For instance, 1, 2, 2, 3, 4 are in a *non-increasing order*, as every next element is greater or equals than the previous one.

* **Decreasing Order**  
A sequence of elements is said to be in an *decreasing order* if the next following element is less that the previous one. This order occurs when the sequence contains only unique values. For instance, 4, 3, 2, 1 are in an *decreasing order*, as every next element is less than the previous one.

* **Non-decreasing Order**  
It's similar to *decreasing* order, the only difference is that the next following element may be equal to the previous one. This order occurs when the seqience contains duplicate values. For instance, 4, 3, 2, 2, 1 are in a *non-decreasing order*, as every next element is less or equals than the previous one.

For simplification, we will assume that our task is to sort data in [non-increasing order](#non-increasing-order). So, starting from now we will explore different [sorting algorithms][sorting-algorithm] from the point of sorting items in so called **ascending order**.

### Most Popular Sorting Algorithms
Here is the list of most popular [sorting algortihms][sorting-algorithm] in computer science that every engineer should probably knows:

 * [Bubble Sort][]  
 Exchange two adjacent elements if they are out of order, repeat until array is sorted.
 * [Selection sort][]  
 Select next smallest element in the array and swap it with the current value, repeat for all elements in the array.
 * [Insertion sort][]  
 Insert next element in the proper place of the sequence of already scanned elements, repeat for all elements in the array.
 * [Merge sort][]  
 Divide array of elements into two parts, sort two parts individually and then merge them together.
 * [Quick sort][]  
 Choose a pivot value and partition the array into two segments based on it, repeat the process for two segments recursively.
 * [Heap sort][]  
 TBD

It's not the full list of all developed [sorting algortihms][sorting-algorithm] on the Earth, there are lots of them. But it is a good start point, what do you think? 

### Our Goal
Keep in mind that the goal is not only to learn a dozens of different ways to sort data. The goal is to learn how to select the most efficient way among dozens of them. First of all [sorting algorithms][sorting-algorithm] are used as a tool to study the algorithm theory. It's very important to understand how to calculate the complexity of the each algorithm, its cost model and execution time, and to know pros and cons for practical usage.

There are multiple ways to solve a single problem, and we need to learn to choose wisely!

Let's get started!

[sorting-algorithm]: https://en.wikipedia.org/wiki/Sorting_algorithm "Sorting Algorithm - Wikipedia"
[sorting]: https://en.wikipedia.org/wiki/Sorting "Sorting - Wikipedia"
[comparison sort]: https://en.wikipedia.org/wiki/Comparison_sort "Comparison Sort - Wikipedia"
[order]: https://en.wikipedia.org/wiki/Order "Order - Wikipedia"
[lexicographical]: https://en.wikipedia.org/wiki/Lexicographical_order "Lexicographical Order - Wikipedia"
[recursion]: https://en.wikipedia.org/wiki/Recursion "Recursion - Wikipedia"
[Bubble Sort]: bubble-sort/README.md
[Selection Sort]: selection-sort/README.md
[Insertion Sort]: insertion-sort/README.md
[Merge Sort]: merge-sort/README.md
[Quick Sort]: quick-sort/README.md
[Heap Sort]: heap-sort/README.md
