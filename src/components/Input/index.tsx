"use client";
import React from "react";
import { ErrorMessage, useField } from "formik";
import { Input as InputUi } from "@nextui-org/react";

export interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  [x: string]: unknown;
}

export const Input: React.FC<InputProps> = (props) => {
  const [field] = useField(props);

  return (
    <>
      <InputUi
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="span"
        className="dark:text-red-500 mb-3 text-red-600"
      />
    </>
  );
};
