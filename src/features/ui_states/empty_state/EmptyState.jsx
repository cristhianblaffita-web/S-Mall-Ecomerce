import "./EmptyState.css";

const EmptyState = ({ message = "No data found" }) => {
  return (
    <div className="container">
      <div className="icon">📭</div>
      <p className="message">{message}</p>
    </div>
  );
};

export default EmptyState;
