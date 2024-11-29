# React
React is a framework that breaks code down into `components`. You can add behavior using `hooks` to react. React also provides `state management`. These three are the core fundamentals of react

## Components
Components are reusable html elements. For example, you want a styled button with text. You can define components like this:
```ts
export function Profile() {
  return (
    <img
      src="https://i.imgur.com"
    />
  )
}
```
To call the component, you simply do it like html. Notice how components are just functions, the return is the html that is actually shown. 
```tsx
<Profile></Profile>
```

## Hooks
"Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks)" - React documentation. Hooks organize the behavior of your component. 
```ts
import { useState } from "react"

export function Profile() {
  const [state, setState] = useState();
  return (
    <img
      src="https://i.imgur.com"
    />
  )
}
```

## State management
You can manage in react using the default react hook called `useState`. State is like a variable that holds value, but because of the nature of react, you cannot make variables that are persistent unless you use hooks. Thats why `useState` is invented. Lets go back to the useState hook
```ts
import { useState } from "react"

export function Profile() {
  const [state, setState] = useState(0);
  return (
    <img
      src="https://i.imgur.com"
    />
  )
}
```

---

When calling `useState`, you have to [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the value into two variables. The first variable represents the value, the second variable is a function that allows you to modify the value. You might be thinking: *why the hell do I need to do this when I can directly mutate the first variable*. This is because of the concept of immutability, its considered a [good practice](https://medium.com/@fortune.nwuneke/immutable-state-updates-in-javascript-b1ae93a1c8d6) to make states immutable and only allowing functions to modify the state. If you don't care and attempt to change the first variable, typescript will scream at you. 

---

The correct way to do this is calling the second variable. You can call by using `setState(1)` with the code above to change the first variable. 

## Concept of Rerendering

WARNING, THIS IS BASED OFF OF MY UNDERSTANDING OF REACT, THERE MIGHT BE INFORMATION THAT AREN'T ACCURATE

---

Every time a *state* changes in react. For example, you called the second variable in `useState` hook. There are other factors that also contribute to rerendering. Every time a react component "rerenders". Internally react will call the function again, this means any variables will be deleted, which is why we need `hooks`. Hooks "stick" to your react component, and preserves data before the next rerender. 