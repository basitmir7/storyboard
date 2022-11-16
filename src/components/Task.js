import Button from "../components/button";

const Task = ({
  title,
  description,
  image,
  docs,
  url,
  video,
  dummy_text,
  ifInput,
}) => {
  return (
    <div className="task">
      <div className="task-heading">
        <h5>{title}</h5>
      </div>
      <div className="description">{description}</div>
      <img className="image" src={image} />
      <embed
        style={{ display: `${docs ? "block" : "none"}` }}
        height="390px"
        src={docs}
      ></embed>
      <a className="url" href={url}></a>
      <div className="dummy-text">{dummy_text}</div>
      <div
        className="input-area"
        style={{ display: `${ifInput === "input_asset" ? "flex" : "none"}` }}
      >
        <textarea
          placeholder="enter text here"
          type="text"
          style={{
            borderRadius: "14px",
            margin: "7px 10px",
            border: "none",
          }}
        />
        <Button
          btnText="submit"
          width="20%"
          margin="8px 9px 0 auto"
          radius="20px"
          padding="3px 4px"
        />
      </div>

      <iframe
        style={{ display: `${video ? "block" : "none"}`, width: "auto" }}
        height="300"
        src={video}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Task;
