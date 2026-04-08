import "./ErrorState.css";

const ErrorState = ({ message = "Something went wrong", hint = "Please check your internet connection" }) => {
  return (
    <div className="container">
      <div className="icon">⚠️</div>
      <p className="message">{message}</p>
      <p className="error-hint text-gray">{hint}</p>
    </div>
  );
};

export default ErrorState;
