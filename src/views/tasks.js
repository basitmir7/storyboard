import Task from "../components/Task";
const Tasks = ({ data }) => {
  return (
    <>
      <div className="task-container">
        {data.map((elem) => {
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
    </>
  );
};

export default Tasks;
