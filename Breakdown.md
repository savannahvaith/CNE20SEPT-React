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
   6. 