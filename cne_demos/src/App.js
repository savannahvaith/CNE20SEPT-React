// import './App.css';
import './Resources/CSS/Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Components/06-Lifting-State/Exercise/Calculator';
import Clock from './Components/07-LifeCycle/Clock';
import Clock2 from './Components/04-State/Clock';
import Search from './Components/06-Lifting-State/Search';
import SearchableList from './Components/06-Lifting-State/SearchableList';



function App() {
  return (
      <>
        {/* <Calculator/> */}
        {/* <Clock/>
        <Clock2/> */}
        <SearchableList/>
      </>
  );
}
export default App;

// to run - in the terminal navigate to the same
// location as your package.json
// run npm start