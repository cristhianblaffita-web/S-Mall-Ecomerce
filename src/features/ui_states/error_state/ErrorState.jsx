import "./ErrorState.css";
import { PiWarningCircle } from "react-icons/pi";
import { RiWifiOffLine } from "react-icons/ri";
import { LuServerCrash } from "react-icons/lu";

const ErrorState = ({ error, message = "Something went wrong"}) => {
  let hint;
  let errorIcon = <PiWarningCircle className="icon"/>;

  if (error.includes("NetworkError")) {
    hint = "It seems like you're offline. Check your internet connection and then try again.";
    errorIcon = <RiWifiOffLine className="icon"/>;
  } else if (error.includes("505")){
    hint = "Server error. Try again later.";
    errorIcon = <LuServerCrash className="icon" />;
  } else {
    hint = `${error}. Maybe the resources you're looking for don't exist.`;
  }
  
  return (
    <div className="error-state-container">
      <div>{errorIcon}</div>
      <p className="message">{message}</p>
      <small className="text-gray">
        {hint}
      </small>
    </div>
  );
};

export default ErrorState;
