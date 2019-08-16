# Code Splitting usinf React.Lazy and suspense
## What is lazy loading/code splitting?
* Code splitting is a technique to reduce javascript bundle size by creating multiple chunks instead of a big unique one.

* A way to do that is to use bundlers such as Webpack or Parcel, that automatically split the bundle into chunks, based on dynamic import usage.

* OnDemand downloading code (Loading the code bundle/ components dynamically When the user clicks on Route or based on user action) is called lazy loading. 
* Lazy loading also can be called as code splitting.

## Demo asyncComponent custom react lazy

## Demo of loadable component

## What is **React.lazy()**
* It is a new function in react that lets you load react components lazily through code splitting without help from any additional libraries.

* Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later. 

* It is now fully integrated into core react library itself. We formerly used [react-loadable](https://github.com/jamiebuilds/react-loadable) to achieve this but now we have [react.lazy()](https://reactjs.org/docs/code-splitting.html) in react core.

* The React.lazy function lets you render a dynamic import as a regular component.

## What is **Suspense** ?
* React Suspense allows you to suspend components rendering until a condition is met. 
* While waiting, a fallback component is rendered. 

* There are basically 2 main use cases:
  1. **Code splitting:** the condition is the download of a chunk of your app when the user wants to access to it,
  2. **data fetching:** the condition is the download of data.

* Suspense is a component required by the lazy function basically used to wrap lazy components. 

* Multiple lazy components can be wrapped with one suspense component. 
* It takes a fallback property that accepts the react elements you want to render as the lazy component is being loaded.

* React.lazy takes a function that will execute the dynamic import. It returns a component that will run this function during its first rendering. The resulting promise status is used by Suspense

  - to render the fallback during the chunk download (**pending Promise**)
  - to render the real React component once downloaded (**resolved Promise**)
  
* We can see a real benefit to use Suspense with React.lazy for code splitting. The code feels synchronous while being asynchronous, and we don’t have to write a lot of boilerplate to manage dynamic import Promise and its component usage.

## The present - Suspense for code splitting: 
using React.lazy + dynamic import,

## The future - Suspense for data fetching:
* your component throws a promise that is caught by Suspense, waiting for it to resolve. While waiting, Suspense renders a fallback component. Then your component is rendered again.

* Suspense uses React error boundaries to catch the thrown promise, and sets a loading state for us, rendering the fallback component (Loading). When it’s resolved, the List component is then rendered again

* No more isLoading state to initiate and to set, no more useEffect to fetch the data, the code just feels synchronous. Suspense handles all the asynchronous state, and coordinates the components rendering.

* Throwing a fetch Promise can seem weird. If it bothers you, React core team is working on React-cache to manage resources.

## How to start code splitting
1. Begin at the route level. Routes are the simplest way to identify points of your application that can be split. The React docs show how Suspense can be used along with react-router.

2. Identify any large components on a page on your site that only render on certain user interactions (like clicking a button). Splitting these components will minimize your JavaScript payloads.

3. Consider splitting anything else that is offscreen and not critical for the user.


## Learn More
https://reactjs.org/docs/code-splitting.html
https://blog.bitsrc.io/lazy-loading-react-components-with-react-lazy-and-suspense-f05c4cfde10c
https://web.dev/code-splitting-suspense

https://itnext.io/what-the-heck-is-this-in-react-suspense-c5e641e487a 

https://reactjs.org/docs/error-boundaries.html
https://reactjs.org/docs/code-splitting.html
https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/
https://www.youtube.com/watch?v=nLF0n9SACd4



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.