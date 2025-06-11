import PropTypes from "prop-types";
import "./checkbox.css";

export default function CheckBox({ className = "", onClick }) {
  return (
    <span
      className={`checkbox ${className}`}
      onClick={onClick}
      role="checkbox"
      tabIndex={0}
    ></span>
  );
}

CheckBox.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
