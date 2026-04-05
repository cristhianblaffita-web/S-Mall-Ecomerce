import "./ErrorState.css";

const ErrorState = ({ message = "Something went wrong" }) => {
  return (
    <div className="container">
      <div className="icon">⚠️</div>
      <p className="message">{message}</p>
    </div>
  );
};

export default ErrorState;
