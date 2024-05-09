<sub>[<<Back to README](README.md)</sub>

# 7. What is a promise in JS?

- [7. What is a promise in JS?](#7-what-is-a-promise-in-js)
- [Using a fetch Promise to Communicate with APIs in JavaScript](#using-a-fetch-promise-to-communicate-with-apis-in-javascript)
  - [Catch the error](#catch-the-error)
  - [Uses](#uses)
- [How to Group Promises Together with Promise.all in JavaScript](#how-to-group-promises-together-with-promiseall-in-javascript)
- [References](#references)



JavaScript’s core purpose involves interacting with external services, such as databases and backend APIs. Frameworks like React, Angular, and Vue rely on data communication with these services, and promises ensure seamless communication.

One of the most common ways to use promises is when you're communicating with outside APIs.

**A promise gives us the ability to make an outside API call and really do any kind of task where we should not have an expectation of the task occurring in real-time**.

So if we're building some type of system or some type of feature **where we do not have an expectation of whatever we're doing happening right away** such as making a **database query** or an **outside API call** then what we can do is utilize a promise. 

**Example**

Calling on the Twitter API, we can retrieve posts. But if Twitter is down, promises allow us to display our page and show the posts when they do arrive from the API.


JavaScript is designed to be non-blocking and **asynchronous**, which means that certain operations, such as fetching data from an API or reading a file, don’t necessarily happen in a linear, sequential order.

JS’s **asynchronous** nature allows you to perform tasks like calling external services and APIs. You can selectively pick and choose, which elements load on your page or application immediately or wait for some to load later. Promises deal specifically with the user experience.




**Syntax**

A **Promise** is an object that represents a value that may not be available yet but will be resolved or rejected in the future.

**Code Example**

In this example, we're creating a new instance of this promise ( a greeting **object**) and we're storing it inside of **sleepyGreeting**.

A promise is expected to either **succeed or encounter an error**. We inform our program that it will receive either a successful response or an error, along with **instructions on how to handle it.** 

```JS
let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello....')
  }, 2000);

  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
});

sleepyGreeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
  ```
Explanation of how we have created the promise and details about the syntax used:

1. **Creating a Promise**:
   - The `new Promise((resolve, reject) => { ... })` syntax creates a new Promise.
   - It takes an **arrow function** with two arguments: `resolve` and `reject`. (older versions of javascript--> new Promise((success, failure)))
     - `resolve`: An arrow function to call when the operation is successful (i.e., when the promise is fulfilled).
     - `reject`: An arrow function to call when an error occurs (i.e., when the promise is rejected).

2. **setTimeout and Resolving/Rejecting**:
    We expect that whatever we get back is not going to happen immediately. It may take a few milliseconds or may even take a few seconds.
   - Inside the Promise, there are two `setTimeout` calls:
     - The first one **resolves** the promise after 2000 milliseconds (2 seconds) with the value `'Hello....'`.
     - The second one **rejects** the promise after the same duration with an `Error` object containing the message `'Too sleepy...'`.

3. **Using `.then()` and `.catch()`**:
   - After creating the `sleepyGreeting` Promise, you can chain to the promise name `.then()` and `.catch()` methods.
   - `.then(data => { ... })`:
     - This method is called when the promise is resolved successfully.
     - It receives the resolved value (in this case, `'Hello....'`) as the `data` parameter.
     - The provided arrow function logs the data to the console.
   - `.catch(err => { ... })`:
     - This method is called when the promise is rejected (i.e., an error occurs).
     - It receives the rejected error (in this case, an `Error` object with the message `'Too sleepy...'`) as the `err` parameter.
     - The provided arrow function logs the error to the console.

4. **Execution**:
   - When you run `sleepyGreeting`, it starts the asynchronous process.
   - After 2 seconds, either the `resolve` or `reject` arrow function is called based on the timeouts.


In summary, Promises allow you to handle asynchronous operations in a more structured way, ensuring that you can handle both successful and failed outcomes. 

<br>


# Using a fetch Promise to Communicate with APIs in JavaScript

One of the most common reasons why you're ever going to **use promises is to communicate with outside services.**

We're going to see how we can communicate with an outside API leveraging promises.

When it comes to working with promises the whole point of it is being able to implement asynchronous behavior which means that you want the ability to call this API without stopping the entire communication pattern in the data flow for the rest of your application. You store it in a promise. Then whenever that data comes back then you can show that on the screen.

What **fetch()** brings back to us is a promise.

A promise, by itself, doesn’t directly output anything on the screen. **When you receive a promise object, you must define what to do with it.** Specify how to handle a successful response and how to handle failure.

fetch() can be used with any type of data. So we define it and say that this data is JSON (data.json) and this is going to **convert** all of that data that we get back **into JSON.**

```JS
.then(data => data.json());
```

**Example**:

**We want to fetch() film data from the SWAPI API, converts it to JSON, and logs the titles, first, and later, the  urls to the console.**
<br>

![Swapi API documentation page for films data](/images/screenshot%20form%20Swapi%20API.png)
[Screenshot of Swapi API documentation page for films data](https://swapi.dev/api/films/)

We follow these steps: 1)We fech the film data (in general) from the APi, 2)-We fetch the film **titles** and 3)We fetch the film **url**.

```NOTE:
NOTE:
We use the Firefox browser´s console (shorcut: CTRL+SHIFT+i). CodePen limits the ammount of data received. Chrome may block, as well, the code.

To run the code : CTRL+enter

If we need to run the same code again, we better close the browser and open it again to avoid errors like this:" Uncaught SyntaxError: redeclaration of const filmsPromise".

```



<br>


**1. We fetch the film data (in general) from the APi**:  https://swapi.dev/api/films/


```JS
fetch("https://swapi.dev/api/films/")
    .then(data => data.json()) // converting to json
    .then(console.log); // print your data
```
<br>

![fetch films gerneral data](/images/fetch%20films%20data%20fromswapi%20API%20.png)

<br>

We can see in the above image that inside **results** we have the **title** and **url** that we want to fetch later.


**2. We fetch() the film **titles**.**

<br>

```JS
console.log('Starting fetch call');
const filmsPromise = fetch("https://swapi.dev/api/films/")
console.log('After fetch call');
console.log(filmsPromise);
console.log('After program has run');
filmsPromise
  .then(data => data.json())  // converting to json
  .then(data => {
    data.results.forEach((item) => {
      console.log(item.title);
    });
})
	.catch(error => {
    console.error('Error fetching data:', error);
  });

// Output: films
// A New Hope 
// The Empire Strikes Back  
// Return of the Jedi  
// The Phantom Menace 
// Attack of the Clones 
// Revenge of the Sith
```
<br>

**Explanation**:

1. **Starting the Fetch Call**:
   - The line `console.log('Starting fetch call');` simply logs the message "Starting fetch call" to the console.
   - This is the initial step before making an HTTP request using the Fetch API.

2. **Fetching Data from an API**:
   - The next line creates a **promise** by calling `fetch("https://swapi.dev/api/films/")`.
   - That URL points to the Star Wars API (SWAPI) films endpoint.
   - The `fetch()` function returns a promise that resolves with a `Response` object representing the HTTP response.

3. **Logging After Fetch Call**:
   - The line `console.log('After fetch call');` logs the message "After fetch call" to the console.
   - This step occurs immediately after initiating the fetch request.

4. **The Films Promise**:
   - The line `console.log(filmsPromise);` logs the `filmsPromise` object to the console.
   - The `filmsPromise` is a promise that represents the pending HTTP request to retrieve film data from SWAPI.

5. **Handling the Promise**:
   - The subsequent code uses `.then()` and `.catch()` to handle the promise:
     - `.then(data => data.json())`: This method is chained to the promise. It converts the response body (which is in JSON format) to a JavaScript object.
     - `.then(data => { ... })`: Inside this block, the `data.results` array is iterated over, and each film title is logged to the console.
     - `.catch(error => { ... })`: If any error occurs during the fetch (e.g., network issues), it is caught here, and an error message is logged.

6. **Execution Flow**:
   - The fetch request is asynchronous, so the code continues executing while waiting for the response.
   - Once the response is received, the promise resolves, and the `.then()` callbacks are executed.
   - If an error occurs, the `.catch()` callback handles it with a message.

<br>

![promise to fecth API](/images/promise%20fetch%20swapi%20API.png)

<br>

## Catch the error

What happens if this promise does not resolve properly so if it gets rejected and we have an error we need to be able to catch that error with `.catch()`  (as seen in the example code).

Let's imagine that we come up to the top of our code and change our
const postsPromise = fetch("https://swapi.dev/api/films/"). We change the https to HTTP: http://swapi.dev/api/films/

Then this is not going to work properly if we tried to pull it in. And the reason is that deals specifically with cybersecurity. If you are fetching this type of API endpoint and it's not secure there's a chance you might be bringing in different elements that are not secure into your own application and so javascript is going to block that.

<br>

![catch error code image](/images/promise%20fetch%20cath%20error.png)

<br>

The page here was loaded over https but requested an insecure resource. And so  that's the reason why it was blocked. 

It is very useful to render something on the screen and say there is an error in communicating with the outside API. For example:

<br>

```JS
// first option
	.catch(error => {
    console.error('Error fetching data:', error);
  });

// second option
.catch((err) => {
  console.log(err);
});
```

"In the first `.catch()` block, we use `console.error('Error fetching data:', error);`. This will print an error message to the console with a special format for errors, which can be helpful for quickly identifying issues.

In the second `.catch()` block, we use `console.log(err);`. This will simply print the error message to the console without any special formatting. You can use it if you prefer a simpler output."

<br>


## Uses

Working with promises we've been able to communicate with a completely different server and we've been able to bring all of those film titles for that other application right into our own programs so we'd be able to do this if we're working in some kind of front-end application. We'd be able to communicate with this outside API and pull in say the film title.

**3. We fetch() the film **url**.**

Let´s try now to also pull in some of the other elements, like for example the **url**.

<br>

![fetch url data](/images/promise%20fetch%20url%20swapi%20API.png)

<br>

# How to Group Promises Together with Promise.all in JavaScript


We can group promises together. This is a common pattern that you'll see where you have various promises that are very similar. 

And when that's the case we can actually put those together and then treat them as a group of promises and we can do this using a term called **`Promise.all`**.


So we´re going to build a couple promises here:

<br>

```JS
// promise one
const greeting = new Promise((resolve, reject) =>{
  resolve('Hi there'); // if it works 
  reject('Oops, bad greeting'); // if it doesn´t work
});

// promise two
const updateAccount = new Promise((resolve, reject) => {
  resolve('Updating last login...');
  reject('Error updating account with login.');
});
```
<br>

So what we´re trying to mimic above is a number of different processes that you might do if you're building a web or a mobile application where you want to:
-  **render out a greeting to a user**. 
-  But whenever they log in you also want to **update their account** **and let the system know that that user has logged in**. 
So both of **these processes** **are going to need to run every time a user logs into the system**. And so because of that, it makes sense to **treat them the same.**

So instead of calling update account and then adding a **.then** and  a **.catch** and all of those processes, what we can do is **leverage** **`promise. all`** so that we can treat it the same. And then, we can just loop over these.

So on the next code we say **const loginActivities** and then we set it **equal to Promise.all** and **pass in an array of promises**: greeting and then updateAccount.

```JS
const loginActivities = Promise.all([greeting, updateAccount]);

console.log(loginActivities);  // [object Promise] {}  --> it returns a promise itself.
```

**`promise all`** as seen above it returns a promise itself. 

But it is a different type of promise because it **has multiple promises** **(set of promises)** inside of it and that's an important kind of idea to remember.

That means that we are going to **have to iterate over this because it's an array**. We use `.forEach` that gives us the ability to iterate over an array. 

And then in order to **call it** we use our **`.then`** call.

Technically we could have chained it on to the end of the const loginActivities statement. But we just **put it on its own line so that it's a little bit easier to read.**

We're going to get back the response of that promise and then that response is going to have a collection:

<br>


```JS
loginActivities.then(res => {
  console.log(res);
})

// output
// [object Array] (2)
// ["Hi there","Updating last login..."]
```
<br>

In this case, both of them are passing so we're getting both of those back. 

And now we want each one of these , we want to be able to treat them individually.

<br>


```JS
loginActivities.then(res => {   // "res" is just short for response
  res.forEach(activity => {
    console.log(activity);
  })
})

// output:
// "Hi there"
// "Updating last login..."
```
<br>

It prints out both of those elements it prints out the **greeting** and the **update accounts** so both those promises worked. And we were able to iterate over them.

In summary, the purpose of above code is to handle the resolved values of both promises (greeting and updateAccount) together using Promise.all().

By using **forEach**, we can process each activity (resolved value) in the array and log it to the console.

The forEach loop allows us to iterate over the resolved values (activities) from the combined promise, making our code more efficient and easier to read. 

**Other way: without using Promise.all:**

If we want to achieve the same result without using Promise.all() or .forEach(), we can manually handle each promise resolution using separate .then() blocks.

We **handle each promise** (greeting and updateAccount) **separately** using `.then()` and `.catch()` blocks.

If the promise resolves, we log the result; if it rejects, we log the error.

```JS
const greeting = new Promise((resolve, reject) => {
  resolve('Hi there');
  reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) => {
  resolve('Updating last login...');
  reject('Error updating account with login.');
});

// Handle 'greeting' promise
greeting
  .then(greetingResult => {
    console.log(greetingResult);
  })
  .catch(greetingError => {
    console.error(greetingError);
  });

// Handle 'updateAccount' promise
updateAccount
  .then(updateResult => {
    console.log(updateResult);
  })
  .catch(updateError => {
    console.error(updateError);
  });

```
<br>

In the **image below** we can **compare both code examples**. The one on the left is using Promise.all() or .forEach(). And the one on the rigth is the example, manually handling each promise resolution, using separate .then() blocks. 

<br>


![promises all vs separated promises code image](/images/promise%20all%20vs%20separated%20promises.png)



**Conclusion**:

If we compare both ways, we can see that our earlier code, using promise.all,
was more efficient than handling each promise (greeting and updateAccount) separately.

# References
* [Introduction to JavaScript Promises](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/introduction-javascript-promises)
* https://www.geeksforgeeks.org/asynchronous-javascript/
*  [Asynchronous JavaScript](https://www.w3schools.com/js/js_asynchronous.asp)
* [The Asynchronous Nature of Javascript](https://medium.com/@maddieweber7/the-asynchronous-nature-of-javascript-16e4882a833b)

<br>

[ <span style="color: #f2f2f2; font-size: 30px;">![alt](/images/Top-Icon1.webp)](#top)</span>


<sub>[<<Back to README](README.md)</sub>