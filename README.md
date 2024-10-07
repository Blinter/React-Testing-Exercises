# React Testing Exercises


### **Part 2: Smoke and Snapshot tests**

The *Card* and *Carousel* components don’t have any smoke or snapshot tests. Write one of each type of test for each component.

### **Part 3: Bug! Left arrow**

As you may have noticed, the left arrow and the right arrow both do the same thing: move to the next image in the image array. Write a (failing) test that checks for this bug. In other words, write a test that expects that when you’re on the second image, clicking the left arrow will move you to the first image. Once you’ve written a failing test, fix the app so that your test turns green.

### **Part 4: Bug! Exhausting the image array**

As you may have noticed, if you’re on the last image and try to move forward, or if you’re on the first image and try to move backward, you get an error. To fix this, let’s just hide the left arrow on the first image and the right arrow on the last.

Write a (failing) test to check that the left arrow is missing when you’re on the first image, and that the right arrow is missing when you’re on the last image. Then fix the bug so that your test turns green.


---

## **Further Study: Coin Flip**

For this part, you will create a coin flipping counter.

The user should be able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. The app should also keep track of how many times heads and tails have shown up.

Before building anything, *think about the structure of your React app.* Don’t build this application with a single component: think about how to break your app up into at least two separate components!

Here’s some inspiration:
![Coin Flip](coin.gif)

### **Tests**

Write tests for your application as well. At a minimum, you should test that there’s no coin image when the page loads, and that the text below the coin updates properly when the coin lands on heads or tails.

**Testing Randomness**

Testing random output can be tricky, since it’s unpredictable. Fortunately, Jest comes with functionality to *mock* any function you like, including *Math.random*. One way to handle it is with code like this:
```
beforeEach(function() {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

afterEach(function() {
  Math.random.mockRestore();
});
```

With this code, Jest will ensure that the first call to Math.random() returns 0.25, and the second call will return 0.75. In this way you can make random output completely predictable within your tests.

For more on this, check out the [Jest docs](https://jestjs.io/docs/en/mock-function-api.html).