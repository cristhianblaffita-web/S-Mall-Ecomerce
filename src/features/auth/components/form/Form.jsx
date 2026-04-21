const Form = ({
  title = "Welcome back",
  redirectLink = "signup",
  redirectLinkTitle = "Sign up",
  onSubmit = () => {},
  submitLabel = "Submit",
  children,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(Object.fromEntries(formData.entries()));
  };

  return (
    <div className=" absolute inset-0 flex justify-center items-center min-h-100 bg-background">
      <div
        className="bg-surface p-32 rounded-lg shadow-md w-full"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-lg font-bold text-center text-normal mb-16">
          {title}
        </h2>
        <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
          {children}
          <button
            type="submit"
            className="primary-button text-light p-16 rounded-sm cursor-pointer bdr-0"
          >
            {submitLabel}
          </button>
        </form>
        <p className="text-sm text-gray text-center mt-16">
          Don’t have an account?{" "}
          <a href={redirectLink} className="text-accent cursor-pointer">
            {redirectLinkTitle}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Form;
