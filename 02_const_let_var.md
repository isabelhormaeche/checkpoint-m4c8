<sub>[<<Back to README](README.md)</sub>

# 2. What are the differences between const, let and var?

![alt](/images/JS%20var%20let%20const%20visual%20image%20by%203dCodeWorld.png)

JavaScript **var** / **let** / **const** visual image [by 3dCodeWorld.](https://www.youtube.com/@3dCodeWorld)

##  VARIABLE SCOPE

Local vs global


```JS
var userObj = {                      // Global
email: "sample@devcamp.com",
fullName: "Kris Hud"
}

function dashboardGreeting(){
  var userObj = {                     //local
    email: "sample@devcamp.com",    
    fullName: "Pepa Smith"
  console.log("Hi there, ".concat(userObj.fullName));
}
}
dashboardGreeting();   // Pepa Smith
console.log(userObj.fullName); // "Kris Hud"
```

In this code it takes the object, it pull out the fullName and concat with our greeting.

## ISSUES:

**LOCAL VARIABLE** (local to the function). Doesn´t override it. We named it the same as the frist var userObj and with the same values. But we can ONLY use them inside the fucntion.

Everything outside of that it´s consider --> OUT OF SCOPE --> GLOBAL variable.

ATTENTION!!! **if we remove the (**var**) is not longer local but global!!!** thus why it´s **very important **to put VAR or LET when you declare a variable, to avoid accidentally create a global variable.
<br>

```JS
function dashboardGreeting(){
  var userObj = {                  // don´t forget the (var)
    email: "sample@devcamp.com",    //local
    fullName: "Pepa Smith"
  }   
  console.log("Hi there, ".concat(userObj.fullName));
}


dashboardGreeting();
console.log(userObj.fullName);
```
<br>


NOTE: **BEST PRACTISE:** Don´t put many variables outside functions or better, none!



Let's see the **differences** between `const`, `let`, and `var` in JavaScript:


Let’s use an everyday life analogy to understand var, let, and const:

1. **`var`**: (Community Blackboard):
Imagine var as a community blackboard in a park. Anyone can write on it, erase it, or modify what’s written. However, because it’s in a public space, sometimes what you write might be changed by others, leading to confusion. This is like var being globally scoped and prone to being overwritten or causing conflicts.

<br>

![var image](/images/var%20community%20blackboard%20by%20medium.png)
<br>
**var** (Community Blackboard), [by Rithin menezes - Medium.com ](https://medium.com/@rithinmenezes/understanding-let-var-and-const-in-javascript-a-guide-to-variable-declarations-f271c5b8dc79)


   - **Scope**:
     - Globally scoped or function scoped.
     - Declared outside a function: available for use throughout the entire window.
     - Declared within a function: accessible only within that function.
   - **Re-declaration and Updates**:
     - Can be re-declared and updated within its scope.
   - **Hoisting**:
     - Hoisted to the top of its scope and initialized with `undefined`.
   - **Problem**:
     - Inconsistent scoping behavior.
     - Example:
       ```javascript
       var greeter = "hey hi";
       var times = 4;
       if (times > 3) {
         var greeter = "say Hello instead";
       }
       ```
<br>

1. **`let`**: (Personal Notebook):
   
<br>
   
![var image](/images/Let%20(Personal%20Notebook).png)
<br>


**let** (Personal Notebook), [by Rithin menezes - Medium.com ](https://medium.com/@rithinmenezes/understanding-let-var-and-const-in-javascript-a-guide-to-variable-declarations-f271c5b8dc79)

Think of let as a page in your personal notebook. You can write notes, erase them, or change them, but only within that page. Once you turn the page, those notes are not applicable. This is similar to let being block-scoped, meaning it only exists within the specific set of curly braces `{}` where it’s declared.

   - **Scope**:
     - Block scoped (within curly braces `{}` ).
     - Available only within the block where it's defined.
   - **Updates**:
     - Can be updated (reassigned) within its scope.
   - **Hoisting**:
     - Hoisted to the top of its scope but not initialized.
   - **Use Case**:
     - When you have a variable that may change its value over time.

1. **`const`** (Engraved Stone Tablet):

<br>
   
![var image](/images/Const%20(Engraved%20Stone%20Tablet).png)
<br>
**const** (Engraved Stone Tablet), [by Rithin menezes - Medium.com ](/images/)

Consider const as an engraved stone tablet. Once you carve your message, it’s permanent. You can’t erase or change it. It’s great for important messages that must not be altered. This is akin to const in JavaScript, where once a value is assigned, it cannot be reassigned.

   - **Scope**:
     - Block scoped (within curly braces `{}` ).
     - Available only within the block where it's defined.
   - **Immutability**:
     - Cannot be updated or re-declared after initial assignment.
   - **Use Case**:
     - For variables that should remain constant (improves readability).

Remember:
- Use `const` for constants.
- Use `let` when a variable may change.
- Avoid using `var` due to its inconsistent behavior.
  
<br>

# References

* [FreeCodeCamp: Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

* [3dCodeWorld: JavaScript for visual learners course](https://www.youtube.com/@3dCodeWorld)

* [Medium: Mastering JavaScript Variables: Understanding let, var, and const  ](https://medium.com/@rithinmenezes/understanding-let-var-and-const-in-javascript-a-guide-to-variable-declarations-f271c5b8dc79)
  


[ <span style="color: #f2f2f2; font-size: 30px;">![alt](/images/Top-Icon1.webp)](#top)</span>

<sub>[<<Back to README](README.md)</sub>