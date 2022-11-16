import Navbar from "./views/Navbar";
import Button from "./components/button";
import "./App.css";
import Sidebar from "./views/Sidebar";
import Tasks from "./views/tasks";
import { data } from "./data";

function App() {
  const collection = data[0].tasks[0].assets;

  return (
    <div className="App">
      <Navbar />

      <Sidebar data={collection} />

      <main>
        <div className="main-heading">
          <h5>you are taking challenges of new project</h5>
        </div>
        <p>demo task</p>
        <Tasks data={collection} />
      </main>
      <Button btnText="Next" margin="2% 5%" />
    </div>
  );
}

export default App;
