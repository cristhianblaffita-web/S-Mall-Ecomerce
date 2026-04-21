import { useState } from "react";
import FormInput from "./FormInput";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const FormPasswordInput = ({
  placeHolder = "Password",
  value = null,
  handleValue = () => {},
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const togglePassword = () => setHidePassword((prev) => !prev);

  return (
    <fieldset className="relative bdr-0">
      <FormInput
        value={value}
        type="password"
        placeHolder={placeHolder}
        handleValue={handleValue}
      />
      <div
        style={{
          position: "absolute",
          right: "20px",
          top: "calc(100% / 3)",
          width: "24px",
          cursor: "pointer",
        }}
        onClick={togglePassword}
      >
        {hidePassword ? (
          <FaEyeSlash className="w-full" />
        ) : (
          <FaEye className="w-full" />
        )}
      </div>
    </fieldset>
  );
};

export default FormPasswordInput;
