// import './App.css';
import './Resources/CSS/Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentWithState from './Components/04-State/UpdatingState/ComponentWithState';
import DifferentStates from './Components/04-State/UpdatingState/DifferentStates';
import Clock from './Components/04-State/Clock';
import Todo from './Components/Todo-Application/Todo';
import Login from './Components/04-State/Login';
import Car from './Components/04-State/Car';



function App() {
  return (
      <>
        {/* <ComponentWithState/>
        <DifferentStates/>
        <Clock/> */}
        <Todo/>
        {/* <Login//> */}
        {/* <Car/> */}
      </>
  );
}
export default App;

// to run - in the terminal navigate to the same
// location as your package.json
// run npm start