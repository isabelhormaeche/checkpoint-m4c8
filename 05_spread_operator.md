<sub>[<<Back to README](README.md)</sub>

# 5. What does the spread operator do in JS?


The **spread operator** in JavaScript, represented by three dots (`...`), allows you:

1. **Expanding Iterables**:
   - It allows you to expand elements of an iterable (such as arrays or strings) into individual elements.
   - Useful for merging arrays, copying them, or passing their elements to functions without explicit iteration¹.

2. **Array Literals**:
   - In array literals, the spread operator expands an array into its individual elements.
   - For example: `[1, ...iterableObj, '4', 'five', 6]` combines elements from `iterableObj` with other values.
```JS
const iterableObj = [2, 3]; // An iterable array

// Combining elements from iterableObj with other values
const combinedArray = [1, ...iterableObj, '4', 'five', 6];

console.log(combinedArray);
// Output: [1, 2, 3, '4', 'five', 6]

```
<br>

3. **Object Literals**:
   - In object literals, it enumerates the properties of an object and adds key-value pairs to the new object being created.
   - For example: `{ ...obj, key: 'value' }` merges properties from `obj` into a new object.
  
  Examples:

```JS
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }

```
```JS
const obj = { name: 'John', age: 30 };
const additionalProperties = { hobby: 'Programming', city: 'New York' };

// Merging properties from obj and additionalProperties
const mergedObject = { ...obj, key: 'value', ...additionalProperties };

console.log(mergedObject);
// Output: { name: 'John', age: 30, key: 'value', hobby: 'Programming', city: 'New York' }
```
<br>


4. **Versatility**:
   - You can use the spread operator for function arguments, array literals, and object literals.
   - Note that only iterable values (like arrays and strings) can be spread in array literals and argument lists.

Let´s see some more examples within the following code:

```JS
// Combining Arrays
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

//shoppingCart.push(newItems);
//// [object Array] (5)
//[345,375,765,123,
// [object Array] (2)
//[98,123]

//With Spread oprator:
shoppingCart.push(...newItems);
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

// Copying Arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart); //[345, 375, 765, 123, 5]
console.log(shoppingCart); //[345, 375, 765, 123]

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));

// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3
// 10

const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers);
```

**Coding Exercise Example**

In the return below, use Math and **spread operators** to find the highest number of the highscore array.

```JS
function yourTest() {
  const highscore = [237.0198, 256.1, 234.846, 237.21, 256.654];
  
  
  return Math.max(...highscore);
}

console.log(yourTest());

```
<br>

# References

* [DevCamp: Guide to the JavaScript Spread Operator](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/guide-javascript-spread-operator)

* [MDN Web Docs: Spread operator in JavaScript]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

  

<br>

[ <span style="color: #f2f2f2; font-size: 30px;">![alt](/images/Top-Icon1.webp)](#top)</span>


<sub>[<<Back to README](README.md)</sub>