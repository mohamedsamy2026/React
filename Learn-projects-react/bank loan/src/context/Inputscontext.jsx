import { createContext } from "react";

export const FormInputsContext = createContext({
  label:"",
  type:"",
  value:"",
  handleChange:null
})