import "./Button.scss";

function Button(props) {
    return <div className={props.className}>{props.text}</div>;
}

export default Button;
