# React Lesson Plan September CNE

1. What is react?
2. Walk through of how things work
   1. npx
   2. create-react-app
   3. Structure of the demo project that is created
   4. New Components should be created as only functions - New components should be developed as functions. All components are functions since React v16, but class components do not need to be redesigned as functions.
3. Introduction
   1. We write our React code in a language developed by Facebook known as JSX - JavaScript Extension
   2. Why should React Components be written in JSX?
      1. It integrates JavaScript and HTML
      2. It is less vulnerable to security threats than JS.
      3. Explain how having JSX allows you to switch between JS and HTML easily
      4. *01-First, 01-Second*
      5. If they're confused about JSX and why.. show demo `whyJSX.jsx`
   3. Demonstrate how to export try to run the application
   4. Error if the component isn't imported - The default presumption is that it is a .jsx extension so you don't need to include this in your import
4. Parent/Child Components
    1. Create a standard HTML webpage with header, nav, main and footer (Standard.js)
    2. Explain of how it is inefficient and REACT's purpose is to have reuasable components
    3. Draw the diagram of hierarchy / App -> MyInfo -> AwesomeHeader -> AwesomeFooter
    4. Explain the difference between Component and element (i.e. Footer  (Component) footer (Element))
    5. Create a footer element (With import and export) then show them how to add to the existing HTML
    6. A react Component should do one thing
5. Component Hierarchy
   1. We should build a wireframe/ mockup to know what components we would need in order to build the application
   2. Show Community Example
6. Props
   1. UNIDIRECTIONAL data flow - data flows from the top of a component tree to the bottom, data cannot flow back up the component tree
   2. Data that does not change over the lifetime of the component should be considered as **props**
   3. Data that can change should be considered a **state**, state should be the single source of truth for changing data. State should be the highest common component of those that require the data.
   4. Props are a way of passing data from parent to child, once set they are immutable within the component - the only way to change it is by re-rendering the parent.
   5. Show youtube page and the simalarities in tiles - how the images are the same, the length of the video, the title, the number of views & date posted etc. - It will be a single component that is developed onces, but we need to make it so that it can change depending on the image or the title.  
   6. Demo of what props are and how they're passed
   7. Receiving and using props
   8. Default Props
   9. Prop Types
7. State
   1. Data that can change
   2. Single source of truth for changing data, any component that relies on this data should receive it as props except for the highest common component which is where the state should live.
   3. Minimal set of mutable data the application needs
   4. When figuring out if something is a state, ask yourself these questions:
      1. Is it passed in from a parent via props? **PROBABLY ISN'T STATE**
      2. Does it remained unchanged over time? **PROBABLY ISN'T STATE**
      3. Can you compute it based on any other state / props in the component - **PROBABLY ISN'T STATE**
   5. Filterable Table example:
      1. The original list of courses - **not state**
      2. The search text our user enters - **state**
      3. The value of the checkbox - **state**
      4. The filtered list of courses - **not state**
   6. Where state lives:
      1. ![State](https://i.imgur.com/uf0W77J.png)
      2. Identify which components should own state:
         1. Identify every component that renders something based on state
         2. Find common owner component for all components using state
         3. If no component makes sense, createa  new component to hold state and add into the hierarchy at an appropriate high level
      3. ![Hierarchy](https://i.imgur.com/yHwhpOs.png)
   7. Adding state:
      1. Demo: `AddingState/ComponentWithState.jsx` and `AddingState/CountUser.jsx`
      2. For a functional component to have state, we need to import `{useState}` from react
      3. To declare a state value in a component, you need to destructure the array to set values to the name of the state, and the name for a function to update its value to the return of the useState hook. 
      4. The 'useState()` takes in an initial value as argument
      5. To use the state value, simply use the state name in jsx expressions
      6. The name of the state can be anything you want - it is just common practise to use the prefix value 'set' followed by the state value for the updator function.
      7. Demonstrate the state values that are encapsulated under the React Dev Tools
   8. Updating State:
      1. State is often updated due to an event, either user interaction or an external influence.
      2. You should never directly mutate the value of a state, if it needs to be updated, you should use the updator function. Calling the function will tigger a rerender the component, and this will cascade down to any component that uses it via props, if we access it via the state directly this will bypass this process.
      3. Demo `UpdatingState/ComponentWithState.jsx` and `UpdatingState/CountUser.jsx`
8. Forms and Events
9. Inverse Data Flow
10. Working with External Data
   1. Refreshing the application in the browser will destroy any data created during its life
   2. Persisting data requires a temporary or permant store
      1. Local storage - leveraged at a client level
         1. Can be remvoved by the client
         2. Doesn't allow for server level data to be persisted
   3. Understand the lifecycle, so we can work with the data at the right point
   4. Component Life cycle overview:
      1. Three lifecycle stages
         1. Mounting
         2. Updating
         3. Unmounting
      2. Life Cycle Phases:
         1. Rendering - Component being creating, or re-rendered. Pure & no side effects, no changes to the state
         2. Commiting - allow dom interactions and schedule updates
   5. Hooks
      1. React needed a mechanism to add state to them.
      2. Main objective: Make any new way of creating components backwards components
      3. Hooks: Let you hook into react's state and life cycle features
      4. Class -> function much less syntax required, less to transpile
      5. Recommended that new components should be build as functional components
      6. State hook:
         1. `ExampleWithManyStates.jsx` demos useState():
            1. Allows the addition of local state into a function component
            2. Requires **useState** to be used (this is the hook)
            3. Takes an argument of the initial state
            4. Returns an array, which has the current state as the first element, and a function to update it as the second element. We deconstruct this array to declare the state, providing the names of the state and the updating function. It's usual for the updating function to have a prefix of 'set' before the states name. States should never be mutated directly - instead using the updator function
            5. Can have more than one state hook in a component - should be declared immediately declared in the body of the component.
            6. States can have any valid javascript value, including Strings, booleans, numbers, values and objects.
      7. useEffect Hook:
         1. useEffect() is a replacement for CDM, CDU, and CWU.
         2. It is used to perform side effects on components such as fetching data, subscriptions or manually changing DOM from React Components
         3. UseEffect() runs after React flushes changes to DOM - after every render, including the initial one
         4. Takes an argument of a callback function to execute when useEffect() is ran
         5. Declared inside component's body so it and it's callback has access to props and state
         6. We can have more than one effect hook in a callback
         7. `Counter.jsx` demos useEffect():
            1. Allows us to hook into the life cycle components to perform side effects hence is name
11. Routing in React
12. State Management
13. Testing in React
