// import './App.css';
import './Resources/CSS/Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactEnd from './Components/03-props/Walkthrough/04-End-Contact';
import User from './Components/03-props/static-data/User';



function App() {
  return (
    <div className="App">
      {/* <ContactEnd/> */}
      <User/>
    </div>
  );
}
export default App;

// to run - in the terminal navigate to the same
// location as your package.json
// run npm start