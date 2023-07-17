import React, { useEffect } from "react";

function InputField({ name, error, type, className, ...rest }) {
  useEffect(() => {
    const handleWheel = (event) => {
      const inputElement = event.target;

      if (inputElement.type === "number") {
        inputElement.readOnly = true;
        setTimeout(() => {
          inputElement.readOnly = false;
        }, 0);
      }
    };

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  if (type === "textarea") {
    return (
      <textarea
        name={name}
        id={name}
        className={`${className}  w-full p-4 py-2 border rounded-lg bg-primary-1 border-primary focus:outline-none`}
        {...rest}
      />
    );
  }

  return (
    <input
      name={name}
      id={name}
      type={type}
      className={`${className}   w-full p-4 py-2 border rounded-lg bg-primary-1 border-primary focus:outline-none`}
      {...rest}
    />
  );
}

export default InputField;
