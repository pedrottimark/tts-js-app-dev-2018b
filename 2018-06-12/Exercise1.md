# Exercise 1

Calculating gratutity is a repetitive task, so let's create a couple of functions that do the work for us.

1. create a variable titled billAmount and store a random number (ie: 100)
2. create a function titled gratuity()
- gratutity should:
    - multiply the value of billAmount by 20% 
    - hint: use 0.2
    - return the value
3. create a function titled totalWithGrat()
- totalWithGrat should:
    - call the gratutity function
    - add that to the original bill amount
    - return the billAmount + gratuity
4. log the total (with gratuity) to the console
- append new total to the following phrase:
    - "your total including gratuity is:"


Limitation: You can only invoke the totalWithGrat function when logging the result


Next refactor the two functions to take one argument each and return results based on that instead of the variable billAmount