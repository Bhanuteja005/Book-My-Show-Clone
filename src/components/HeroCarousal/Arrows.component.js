export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ 
          ...props.style, 
          backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
          position: "absolute", // position the arrow
          right: "0px", // position on the right side
          top: "0px", // position from the top
          bottom: "0px", // position from the bottom
          margin: "auto", // center vertically
          width: "50px", // square shape
          height: "50px" // square shape
        }}
        onClick={props.onClick}
      />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ 
          ...props.style, 
          backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
          position: "absolute", // position the arrow
          left: "0px", // position on the left side
          top: "0px", // position from the top
          bottom: "0px", // position from the bottom
          margin: "auto", // center vertically
          width: "50px", // square shape
          height: "50px" // square shape
        }}
        onClick={props.onClick}
      />
    </>
  );
};