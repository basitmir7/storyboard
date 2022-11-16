const Button = ({ btnText, margin, width, padding }) => {
  return (
    <>
      <button
        style={{
          margin: `${margin}`,
          width: `${width}`,
          padding: `${padding}`,
        }}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
