import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "branford",
          "a software engineer",
          "a data engineer",
          "a cloud architect",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
