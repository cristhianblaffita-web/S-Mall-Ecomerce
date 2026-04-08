import "./EmptyState.css";
import { ImFileEmpty } from "react-icons/im";

const EmptyState = ({ message = "No data found", hint = "Try using different or less restrictive keywords" }) => {
  return (
    <div className="empty-state-container">
      <div>
        <ImFileEmpty className="icon"/>
      </div>
      <p className="message">{message}</p>
      <small className="text-gray">
        {hint}
      </small>
    </div>
  );
};

export default EmptyState;
