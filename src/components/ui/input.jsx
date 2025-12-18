import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({ type, wrapperClassName, inputClassName, ...props }) {
  const [showPassword, setShowPassword] = useState(
    type === "password" ? true : false
  );
  const handleChangeIcon = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className={`border p-3 px-5 rounded-xl flex items-center justify-between w-full ${wrapperClassName}`}
    >
      <input
        type={showPassword ? "password" : "text"}
        data-slot="input"
        className={` w-full focus-visible:outline-none focus-visible:border-none focus:bg-transparent ${inputClassName}`}
        {...props}
      />
      {type === "password" && (
        <>
          {showPassword ? (
            <FaEyeSlash onClick={handleChangeIcon} />
          ) : (
            <FaEye onClick={handleChangeIcon} />
          )}
        </>
      )}
    </div>
  );
}

export { Input };
