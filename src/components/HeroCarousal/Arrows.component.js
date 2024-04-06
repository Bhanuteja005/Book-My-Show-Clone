export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ 
          ...props.style, 
          backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
           // position the arrow
          right: "-50px", // position on the right side
          top: "200px", // position from the top
          bottom: "0px", // position from the bottom
          marginRight:"-50px", // center vertically
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
           // position the arrow
          right: "-50px", // position on the right side
          top: "200px", // position from the top
          bottom: "0px", // position from the bottom
          marginLeft:"-49px", // center vertically
          width: "50px", // square shape
          height: "50px" // square shape
        }}
        onClick={props.onClick}
      />
    </>
  );
};