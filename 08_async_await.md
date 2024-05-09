<sub>[<<Back to README](README.md)</sub>

# 8. What do async and await do for us?
- [8. What do async and await do for us?](#8-what-do-async-and-await-do-for-us)
  - [Introduction and Syntax](#introduction-and-syntax)
  - [Combining Async / Await with Closures to Ensure All Processes Have Run](#combining-async--await-with-closures-to-ensure-all-processes-have-run)
  - [Using Async / Await for Communicating with Outside APIs in JavaScript](#using-async--await-for-communicating-with-outside-apis-in-javascript)
  - [Implementing Error Handling In a JavaScript Async / Await Function](#implementing-error-handling-in-a-javascript-async--await-function)
  - [References](#references)

<br>

##  Introduction and Syntax

In JavaScript, due to its asynchronous nature, managing the order in which functions are called and returned can become complex, especially when dealing with asynchronous tasks that take several seconds or longer. However, the async and await functions simplify this process, providing a **more efficient and readable way to handle asynchronous operations.**


It allow us to simply declare a list of when we want each one of several processes to occur in the order we want them to occur. 


```Note:
Note: The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async/await is similar to combining generators and promises.
```


Use of async and await enables the use of ordinary [**try / catch blocks**](#implementing-error-handling-in-a-javascript-async--await-function) around asynchronous code.

<br>

**Async Syntax**

The keyword `async` before a function makes the function return a **promise**:
<br>

```JS
async function nameFunction(param0) {
  statements
}
async function nameFunction(param0, param1) {
  statements
}
async function nameFunction(param0, param1, /* …, */ paramN) {
  statements
}
```
<br>

An **async function** declaration creates an AsyncFunction **object**. Each time when an async function is called, **it returns a new [Promise](07_promise.md) (even if you don’t explicitly return one)** which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

If you forget to return a promise, your function might not behave as expected. **Always ensure your async functions return promises.**


**Example**

```JS
async function myFunction() {
  return "Hello";
}
Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}
```
<br>

**Await expressions**

Async functions can contain zero or more await expressions. **Await expressions** make promise-returning functions behave as though they're synchronous by **suspending execution until the returned promise is fulfilled or rejected.** The resolved value of the promise is treated as the return value of the await expression. 

**Be aware of the execution order to avoid unexpected results.** Although await makes asynchronous code look synchronous, **it doesn’t change the order of execution**.
Code after an await expression will only run once the awaited promise resolves.

**Double-check that the expression following await is a promise.** Await can **only be used with promises** (or objects with a .then() method).
If you accidentally use it on a non-promise value, it won’t pause execution as expected.

<br>

**Await Syntax**

The **`await`** keyword can only be used **inside an async function**.
If you try to use it outside of an async context, you’ll encounter a syntax error.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

let value = await promise;


**Note: Overusing await in a Loop:**

Using await inside a loop can lead to performance issues.
If you have a loop that makes multiple asynchronous calls, consider using [Promise.all()](07_promise.md) to parallelize those calls instead of awaiting each one individually.
<br>


```JS
Basic Syntax
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```
<br>

The two arguments (resolve and reject) are pre-defined by JavaScript.

We will not create them, but call one of them when the executor function is ready.

Very often we will not need a reject function

<br>

**`setTimeout()` function**

In JavaScript, the setTimeout() function is a powerful tool for managing asynchronous behavior.

It allows us  to schedule the execution of a function or a piece of code after a specified delay (in milliseconds).

It’s commonly used for tasks like delaying an action, creating animations, or handling time-based events.

Remember that setTimeout() executes the function only once.

Syntax:

```JS
setTimeout(function, milliseconds, param1, param2, ...);

```
- *function*: The function to execute after the specified delay.
- *milliseconds*: The time (in milliseconds) to wait before executing the function.
- *param1, param2, …* (optional): Additional parameters to pass to the function
<br>

Example of waiting for a Timeout:
<br>

```JS
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```
<br>


![Example of Waiting for a Timeout](/images/async%20setTimeout.png)
[Try it yourself](https://www.w3schools.com/Js/tryit.asp?filename=tryjs_async4)


In summary, setTimeout() is a fundamental part of JavaScript’s asynchronous capabilities, allowing you to schedule tasks to run after a specified delay.

<br>

**A real-world Example**

In real-world scenarios, certain tasks take time to complete. For example, when a user logs in, there might be server communication, database queries, or other processes that introduce delays.

Let´s see an example of how to use promises and `async`/`await` to handle asynchronous tasks such as simulating user login and account updates  with specified delays. 

We are going to mimic what happens when you log a user into the system. 

We need to add a timer because the process doesn't happen right away. So we´re having the loging take two seconds. That's how long we want it to pause before it runs. In order to do that, we set a  `setTimeout`, where we pass in, a second argument, of 2000 milliseconds.

<br>

```JS

// Simulates user login with a 2-second delay
const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...'); // Resolves after 2 seconds
    }, 2000); // Pause two seconds before it runs
  });
}

// Simulates updating account information with a 2-second delay
const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...'); // Resolves after 2 seconds
    }, 2000); // Pause two seconds before it runs
  });
}

// Asynchronous function to perform login activities
async function loginActivities() {
  const returnedLogin = await login(); // Wait for login to complete
  console.log(returnedLogin); // Log the login status

  const returnedUpdateAccount = await updateAccount(); // Wait for account update
  console.log(returnedUpdateAccount); // Log the account update status
}

loginActivities(); // Execute the login activities
```
<br>

Code Explanation:

1. **`login` Function:** 
   - returns a promise which inside sets a timeout of 2 seconds (2000 milliseconds).
   - After the timeout, it resolves the promise with the string `'User logged in...'`.

2. **`updateAccount` Function:**
   - also returns a promise.
   - After a 2-second timeout, resolves the promise with the string `'Updating last login...'`.

3. **`loginActivities` Function (Async Function):**
   - is declared as an `async` function.
   - **awaits** the result of the `login()` function, storing it in `returnedLogin`.
   - The resolved value (in this case, `'User logged in...'`) is logged to the console.
   - 
   - Next, it **awaits** the result of the `updateAccount()` function, storing it in `returnedUpdateAccount`.
   - Again, the resolved value (in this case, `'Updating last login...'`) is logged to the console.
   

4. **Execution:**
   - When you call `loginActivities()`, it sequentially logs the login status and account update status after the specified delays.
   - But, in this example, if the `login()` function is rejected (i.e., its promise is rejected), the subsequent `updateAccount()` function will **not** run.


<br>

## Combining Async / Await with Closures to Ensure All Processes Have Run



Continuing the earlier example, we can also choose to run a set of processes simultaneously rather than sequentially.

Although the total time taken by all processes remains the same, we want the visual appearance (such as console logs or on-screen updates) to show them happening simultaneously, instead of one happening and the other happening a few seconds later.

This approach creates a more responsive and efficient user experience, even though the underlying execution order remains unchanged.

For that purpose we combine Async / Await with Closures.

Remember that a **closure** is simply a function that can be **wrapped inside of a variable** and then it **can be passed into other functions**.

**Syntax**

Make sure to remove the parens ( ) after `await login` because now we're not treating this like a function anymore. Now we're just treating it like a normal **argument** that is passed in.

So we´re calling these two functions (login() and updateAccount()) and wrapping them inside of **arguments** of login activities and then inside of that we´re simply referencing it.

Because they return promises we can treat them exactly the same so we can call await on both of them. But by leveraging them as **closures** (instead of calling the functions directly) what our async loginActivities() function is going to do is:

<br>


```JS
const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 4000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities(login, updateAccount) {
  const returnedLogin = await login;
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount;
  console.log(returnedUpdateAccount);
}

loginActivities(login(), updateAccount());
```
<br>


to wrap up the entire process and instead of waiting four seconds to run the first one and then two seconds to run the second one. It is not going to show anything on the screen until all the processes are complete (in six seconds total).

Behind the scenes, it's doing exactly what it did before. The only difference is that now it is actually going to wait until all of those processes have run before it shows anything.

The order that we dictate is going to be the only thing that matters and it's not going to matter how long they take.

<br>

```JS
const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 4000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities(login, updateAccount) {
  const returnedLogin = await login;
  console.log(returnedLogin);

  const returnedUpdateAccount = await updateAccount;
  console.log(returnedUpdateAccount);
}

loginActivities(login(), updateAccount());
```

<br>


In summary, by leveraging async and await and also by combining that with working with closures, we have the ability to control exactly when the processes are going to occur when the details are going to be returned and we're able to do it in a pretty easy to read manner.

USES:

Where this becomes very powerful is when we're working with data and we don't know when the return value is going to come back such as with APIs or database connections.

<br>

## Using Async / Await for Communicating with Outside APIs in JavaScript

We can use Async / Await for comminicating with outside APIs.

In the example below, the queryApis()function fetches film data from the Star Wars API (swapi) and repository data from the GitHub API.

It awaits the results of both API calls and logs the data to the console.
The queryApis() function is then executed to start the process.

```JS
async function queryApis() {
  const filmsPromise = fetch("https://swapi.dev/api/films/");
  const results = await filmsPromise.then(res => res.json());
  console.log(results);

  const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
  const repos = await reposPromise.then(res => res.json());
  console.log(repos);
}
queryApis();

```
<br>

What should happen is our API films results should be brought back from swapi and then, and only after then, it should go out and contact GitHub and then return the list of repos. 

Every single time we run it we always get our results (film results) first and then we get our repos second. 

No matter how many times we run this and even if the Swapi API is running slow for a few minutes and the GitHub one is running really fast it's still going to **give these back to us in this specific order** because we've wrapped this entire process up in the async and then we call await on each one of these promises.

## Implementing Error Handling In a JavaScript Async / Await Function

Suppossed that we had several different APIs that we were querying and we don't know which one failed, what we can do is have multiple **try catch blocks.** This way we can wrap up each individual promise inside of a function.

**Example:**

The queryApis function() fetches film data from the Star Wars API and repository data from the GitHub API.

It **awaits** the results of both API calls and logs the data to the console.

It uses **try and catch blocks to handle any errors** that might occur during the API requests.

The data is logged to the console, along with error messages if any issues arise.

<br>

```Js
// Asynchronous function to query APIs
async function queryApis() {
  try {
    // Fetch film data from the Star Wars API
    const filmsPromise = fetch("http://swapi.dev/api/films/");
    const filmsData = await filmsPromise.then(res => res.json());
    console.log("Film data:", filmsData);
  } catch(err) {
    console.log(err);
    console.log('There was an error with the Swapi API');
  }
  
  try {
    // Fetch repository data from GitHub API
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const reposData = await reposPromise.then(res => res.json());
    console.log("Repository data:", reposData);
  } catch(err) {
    console.log(err);
    console.log('There was an error with the GitHub API');
  }
}

// Execute the queryApis function
queryApis();


```
We can  be more specific so we can console a log and say "there was an error with the swapi API", for example, because we wrote http instead of https. But we still get all of our repos from GitHub. 

And so this is a way that you can wrap up each individual promise inside of a function.


**When deciding whether to wrap asynchronous processes individually or together:**

* *** Single try Block:**

    When you want the entire process to stop immediately upon encountering an error and prevent any further execution, use a single try-catch block.

    **Example**: For connected promises (like authentication), it’s better to wrap them all together to avoid attempting subsequent promises after an error occurs.

    Suppose you have a series of promises related to user authentication (e.g., verifying credentials, checking permissions, etc.).

    If any authentication step fails, you’d want to stop the entire process immediately.

    In this case, wrap all authentication-related promises in a single try block.

    In essence, combining related promises in a single try-catch block ensures better error handling and prevents unnecessary execution.


* *** Multiple try Blocks:**

    When you want to handle specific errors individually and differently based on the context for different parts of your code.

    If one promise fails, the other try blocks can still execute independently.

    Example Scenario: Authentication Promises:


    Remember that the choice depends on your specific use case and how you want to handle errors. Both approaches have their place, and you can adapt them based on your application’s requirements.



<br>



## References

* [mdn Web docs: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  
* [DevCamp: Introduction to Async and Await in JavaScript](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/introduction-async-await-javascript)



[ <span style="color: #f2f2f2; font-size: 30px;">![alt](/images/Top-Icon1.webp)](#top)</span>
<br>

<sub>[<<Back to README](README.md)</sub>