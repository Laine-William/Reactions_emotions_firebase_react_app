const Button = (props) => {

    return (
    
      <a className = "btn" href={props.link}> {props.text}</a>
    );
  };
  
  export default Button;