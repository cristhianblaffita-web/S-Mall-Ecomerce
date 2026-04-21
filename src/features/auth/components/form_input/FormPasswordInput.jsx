import { useState } from "react";
import FormInput from "./FormInput";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const FormPasswordInput = ({
  placeHolder = "Password",
  value = "",
  name = "",
  onChange = () => {},
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const togglePassword = () => setHidePassword((prev) => !prev);

  return (
    <fieldset className="relative bdr-0">
      <FormInput
        value={value}
        name={name}
        type={hidePassword ? "password" : "text"}
        placeHolder={placeHolder}
        onChange={onChange}
      />
      <button
        className="absolute right-20 top-33 w-24px cursor-pointer bdr-0 bg-inherit"
        aria-label="Toggle password visibility"
        type="button"
        onClick={togglePassword}
      >
        {hidePassword ? (
          <FaEyeSlash className="w-full" />
        ) : (
          <FaEye className="w-full" />
        )}
      </button>
    </fieldset>
  );
};

export default FormPasswordInput;
