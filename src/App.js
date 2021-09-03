import './App.css';
import Button from "./component/Button"

function App() {

  const students = [
    {
      name: "Sara"
    }, 
    {
      name: "Anne"
    },
    {
      name: "Kamil"
    },
    {
      name: "Mariel"
    }
  ]

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <Button/>
      {students.map(student => {
        return <div>
          <p>{student.name}</p>
          <Button/>
          </div>
      })}
    </div>
  );
}

export default App;
