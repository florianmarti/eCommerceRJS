const Button = (props) => {
  return (
    <button onClick={props.handleOnClick} style={{ color: props.colorText }}>
      {props.children}
    </button>
  );
};
export default Button;
