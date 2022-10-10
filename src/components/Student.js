import Comp from "./Comp";
import propTypes from "prop-types";

const Student = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <Comp name={name} age={age} />
    </div>
  );
};

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
};

Student.defaultProps = {
  name: "He",
  age: 12,
};

export default Student;
