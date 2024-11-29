# Stack
Stack refers to the tools we use in our webapp.

## Languages
We count markup languages as part of the language section. These languages used in some way in our webapp development, although we prefer using `tsx` over plain HTML CSS due to the nature of `react` framework.
* [Typescript](https://www.typescriptlang.org/): Javascript but with typings.
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): Markup language to write the user interface of websites
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Styling your HTML with `className` field and reuse it across code

## Primary Stack
These are the nessarary tools we need in order to build our webapp. You **must** learn all of these tools listed here, or you have no idea how to continue this project.
* [NextJS](https://nextjs.org/): A full stack web framework that smoothly integrates with web hosting tools like [vercel](https://vercel.com/)
* [React](https://react.dev/): The library for websites, very bloated and has a bit of steep learning curve to grasp all the concepts.
* [MongoDB](https://www.mongodb.com/): Datastore hosting and its easier to setup compared to traditional datastores like SQL.

## Secondary Stack
These tools are *optional* to learn. However, the webapp is tightly coupled with these tools. Opting out these libraries will be very painful and hard.
* [Jotai](https://jotai.org/): Global, immutable state library that can store states that are preservable across pages.
* [TailwindCSS](https://tailwindcss.com/): Utility CSS classes that can be used directly in code
* [Flowbite React](https://flowbite-react.com/): A mixture of [flowbite](https://flowbite.com/) (flowbite is built off of TailwindCSS) and [react components](https://react.dev/learn/your-first-component)

## Utility Stack
You don't need to learn these tools, but some code uses these libraries. They are sort of helpful and can speed up the development process quite a bit.
* [Immer](https://www.npmjs.com/package/immer): Dealing with Immutable data such as [react states](https://react.dev/learn/managing-state), [jotai atoms](https://jotai.org/)
* [React Use](https://www.npmjs.com/package/react-use): Helpful [react hooks](https://react.dev/reference/react/hooks) that isn't provided by default react library 
* [Zod](https://www.npmjs.com/package/zod): Schema validation, helpful to deal with a object matching a schema or not
* [Type Fest](https://www.npmjs.com/package/type-fest): Utility types not provided by typescript, provides features like `IntRange<>` 
* [Apollo](https://www.npmjs.com/package/@apollo/client): A "framework?" to send queries using graphql strings to websites that adopt graphql 
* [Lodash](https://www.npmjs.com/package/lodash): Utility library to transform data structures, for example a map to a array
