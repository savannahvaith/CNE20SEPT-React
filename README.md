
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
      <!-- 1. ![State](https://i.imgur.com/uf0W77J.png) -->
      2. Identify which components should own state:
         1. Identify every component that renders something based on state
         2. Find common owner component for all components using state
         3. If no component makes sense, createa  new component to hold state and add into the hierarchy at an appropriate high level
      <!-- 3. ![Hierarchy](https://i.imgur.com/yHwhpOs.png) -->
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
   1. Methods to handle events with React Elements is very similar to handling events on DOM elements
   2. Syntactic differences:
      1. React events are camcelCased ratherthan lowercase:
      2. onclick becomes onClick, onmouseover becomes onMouseOver and so on
      3. With JSX you pass a function as the event handler rather than a string: onclick="clickHandler()" becomes onClick={ () => clickHandler()}
      4. You cannot return false to prevent default behevaiour use preventDefault();
      5. Don'y need to call addEventListener() in react, just provide listener when the element is initially rendered
   3. React Form Components
      1. Usually want to have access to the form values that have been submitted
      2. Forms inherently keep some interal state and therefore rEact has to work differently with them
      3. Any form values are stored in the actual DOM in this situation
         1. The source of truth is not in the virtual dom and this is not good for REact
      4. This is known as an uncontrolled component 
         1. Any value changes will not be recognised by React
   4. Form Submission
      1. GET - Appending form data to the url and sending to the server - refreshes, rebuild the dom - loose data. 
      2. To prevent the default behaviour of clicking submit - we need to intercept the onsubmit event, pass it to a customised submit handler that calls preventDefault
9. Inverse Data Flow (Lifing State)
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
            8. Allows us to hook into the life cycle components to perform side effects hence is name
   6. UseEffect best place to make network calls - 
11. Routing in React
    1.  Single Page Application - React-router standing routing library for React
    2.  Installation : `npm install react-router-dom --save` needs to be added to the project as a dependency
    3.  Linking components:
       1. Wrap an application in a `<Router>` complonent
       2. `<BrowserRouter>` uses the HTML5 history API to keep UI in sync with the URL
       3. `<HashRouter>` - Uses hash portion of URL to keep UI in sync
       4. `<MemoryRouter>` - Keeps history of URL in memory (useful in testing and React Native)
       5. `<StaticRouter>` - Never changes location – useful in server-side rendering
    4. Router Components
       1. Provide `Link` components to create hyperlinks in the appropriate components
       2. `<Link to="/"> Home </Link>`
          1. To can be either a string or an object - the object has 4 properties: pathname, search, hash and state
    5. Adding Links
       1. We want the users to be able to switch between links - `Nav.jsx`
    6. Route Components
       1. We want ot change the views when we click on them thats the job of the route
       2. `<Route path render_method options>`
          1. Path - specifies the url  
          2. Define a route component for every `to` link component you have
          3. Exact - match only if pathname matches location.pathname exactly
          4. Object - match path to passed location history
    7. Defining Routes
       1. `<Redirect>` - forwards to the 'to' attribute
       2. `<Switch>` - Match the first matching component to the route
    8. Parameters
       1. show Params hooks in dev tools
    9. Dynamic links
       1. Link to={`/courses/${id}`}  
       2. Parameterised Route:
          1. Routing is part of the UI 
          2. Nest another link inside the component
          3. useHistory(), useLocation(), useParams() - useParams() returns an object of the key, set course based on the id
12. Data Requests
    1.  Axios - `npm install axios --save`
    2.  GET/ POST 
    3.  Demonstrate with API online 
    4.  Set the information in the state with the response from the API request
    5.  
13. Testing in React
    1.  Objectives
        1.  Using Jest to test React application
        2.  We need to unit test components
        3.  Including snapshots, dom testing and other
        4.  Overview of jest testing library
        5.  Run and access code-coverage reports for tests
    2.  Setting up the test environment
        1.  If created with -create-react-app we already have everything we need in the package.json file, testinglibrary, jest, react, and user events already installed
        2.  `npm test` will be used to run test - hotloads so it will update and run all of them as and when needed
        3.  default test should pass
        4.  Tests should have .test. extension - tests dont need to be stored in the same files.
        5.  folderstructure - __test__ - identified as non production code folder
    3. Jest
       1. Focuses on simplicity, works on all js and other frameworks such as Vue, Angular and more
       2. Follows BDD - to ensure that each line of JS is properly unit tested.
       3. PRovides small syntax to test small units of entire application instead of testing it as a whole
       4. Advantages:
          1. Doesn't depend on any other framework
          2. Doesn't require any DOM
          3. Clean and obvious syntax
       5. Suite
          1. Basic building block of the framework
          2. Collections of similar type test cases written for a specific file / function
          3. Can be nested
          4. Contain a `descibe` function and atleast one call to an `it` or `test` function
             1. The descibe function is not necessarily required though
             2. Descibe() - call to this function requires a string, used to identify the suite and a function that contains calls to the `it` or `test` functions
             3. `it()` or `test()` - Calls to these require a string, used to identify the test case it represents and a function that defines how the test will be evaluated - through calls to the `expect` function. - no difference between the two - `it()` is just an alias for `test()`
             4. `expect()` - can have more than one expect call in a test but discouraged. 
       6. Matcher
          1. Matchers - how to compare the expected result with the actual 
          2. Theres a LOAD of inbuild matchers
          3. Each does a boolean comparison of the actual and expected outputs
          4. Common examples:
             1. `.anything()` = Matches anything expect null or undefined
             2. `.toBe(expected), .toEqual(expected)` = Expect the actual value to be === to the expected, for toEqual, objects and their properties can be compared
             3. `toBeFalsy(), toBeNull(), toBeUndefined()` = Expect the actual value to be falsy, expicitly null or explicitly undefined
             4. `.toContain(expected)` = actual to contain expected - can be in an array as well as a substring in a string
             5. `toBeGreaterThan(expected), toBeGreaterThanOrEqualTo(expected)` = actual to be > or >= expected
             6. `toBeLessThan(expected), toBeLessThanOrEqualTo(expected)` = actual to be < or <= expected
             7. `.not.` = Invert the result of the matcher
       7. Coverage - `npm test -- --coverage` - result stored in /coverage folder
       8. Demo `demo/app.test.js`
       9. The what and how of testing
          1.  react takes data and displays it, we should test such aspects
          2.  We could either render a component tree and assert on its output or run end-to-end tests, which isn't really concerned with react components
          3.  "The more your tests resemble the way your software is used, the more confidence they can give you"
          4.  Components that don't change on their output - use snapshot testing, to check if the render is the same 
          5.  Component that has interactivity - check to see if it renders exactly as we expect
          6.  We need to be able to test components with dependencies - mocking strategies
          7.  hooks - some are inbuilt- no need to check the hook but check the behaviour 
          8.  Routing - react-router-dom - little need to test because it is already tested extensively 
       10. Snapshot testing - useful for making sure the UI will not change unexpectedly - react-test-renderer - needs to be installed 
           1.  Create() - passed to any component
           2.  Makes pure JS object as a representation of the react component
           3.  use ToJson() and toMatchSnapshot() in an expect statement to compare 
           4.  toMatchSnapshot() compares the created component with the snapshot (and creates a snapshot) if one doesn't exist
           5.  Process:
               1.  Render a ui component (use create() - doesn't use a real dom)
               2.  take a snapshot 
               3.  compare snapshot to reference snapshot file stored - the test should assert if the two are the same
               4.  Test fails if two snapshots don't match:
                   1.  Because the change was unexpected
                   2.  Because the snapshot needs to be updated to a new version of the UI Component
            6. demo `App.test.js`
         11. Testing components with props
             1.  Should we test if props are rendered? Yesss!
             2.  Aaprt from any defualt props - DP are part of the core react code and so already tested. Same with proptypes
             3.  We should see if the value of props received are rendered.
             4.  To test the component that has props, use the test-renderer and find elemetns in the components based on the props - findallbytype findallbyprops()
             5.  Demo `ComponentWithProps.test.js`
         12. Mocking components for testing
             1.  Why mock components? - to unit test a component that renders other compontents
             2.  Not interested in the subcomponents implementations
             3.  jest.Mock() - string of the path
                 1.  Supply a callback in options that returns a function to mock the component
                     ```js
                     jest.mock(`.component/componentToMock`, () => {
                        return function MyMockedComponent(){
                           return <span>Mocked component </span>
                        }
                     });
                     ```
                  2. Put componentwithprops in the App - snapshot will not fail - press u - could cause issues as the component is rendered in the future with new values - we should mock the component in this case
                  3. Demo `App.test.js`
         13. Testing State Event Interactions
             1.  Don't need to test setState function because this is done through the core react stuff
             2.  Events that causes side effects should be tested if its fired by the user, we should test the associated function to check if the output we get is correct
             3.  We can render a form and check if the initial value is the same, then fire an onchange, then assert the value of the input is what we changed it to. 
             4.  We need a function that will actually trigger the event - ACT. 
             5.  Act() -> prepares a component for assertion, it can wrap function calls within the component such as triggering event handlers. If an event is to change a value, an object with a target object that sets a value has to be supplied
         14. Mocking Functions
             1.  Useful for when fuctions are passed in as props to a component
             2.  Allows spying on function calls to ensure that things happen 
             3.  Sometimes, state is held in teh parent (inverse data flow), if trying to unit test - its difficult 
             4.  `const functionToMock = jest.fn()`
             5.  jest.fn() - returns a new unused mock function with an optional implementation
             6.  Can then be used as a prop when creating components
                  ```js
                  const testRenderer = create(<MyComponent functionAsProp={functionToMock}/>);
                  ```
             7. Not concerned about implementation of mock function, just happy to if its called with the correct argument 
             8. Matchers - 
                1. toHaveBeenCalled() = expects the function to have been called atleast once 
                2. toHaveBeenCalledWith(obj) = Expect the function spied on to have been called with these particular arguments atleast once
             9. Demo - `FormWithPropsfn.jsx` - need to use reacttestinglibrary
         15. Testing Components Asynchronously
             1.  Need to test teh asynchronous calls made
                 1.  Is the data handled correctly
                 2.  Are error handled
                 3.  Do conditional renders work
             2. There are so many moving parts and time delays to deal with, need a simple method for testing.
             3. `App2.jsx`