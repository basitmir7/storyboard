import Navbar from "./views/Navbar";
import Button from "./components/button";
import "./App.css";
import Sidebar from "./views/Sidebar";
import Task from "./views/Task";
import { data } from "./data";

function App() {
  const collection = data[0].tasks[0].assets;

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <aside>
        <Sidebar data={collection} />
      </aside>
      <main>
        <div className="main-heading">
          <h5>you are taking challenges of new project</h5>
        </div>
        <p>demo task</p>
        <div className="task-container">
          {collection.map((elem) => {
            return (
              <div style={{ padding: "15px" }} key={elem.asset_id}>
                <Task
                  title={elem.asset_title}
                  description={elem.asset_description}
                  image={elem.display_asset_image}
                  docs={elem.display_asset_docs}
                  url={elem.display_asset_url}
                  video={elem.display_asset_video}
                  dummy_text={elem.display_asset_reflection}
                  ifInput={elem.asset_type}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Button btnText="Next" margin="2% 5%" />
    </div>
  );
}

export default App;
