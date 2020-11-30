// import './App.css';
import './Resources/CSS/Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Basic from './Components/05-forms/ComponentWithUncontrolledInput';
import ComponentWithControlledInput from './Components/05-forms/ComponentWithControlledInput';
import SearchableList from './Components/06-Lifting-State/SearchableList';



function App() {
  return (
      <>
      {/* <ComponentWithControlledInput/> */}
      <SearchableList/>
      </>
  );
}
export default App;

// to run - in the terminal navigate to the same
// location as your package.json
// run npm start