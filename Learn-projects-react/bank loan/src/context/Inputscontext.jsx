import { createContext } from "react";

export let contentText = createContext({
  label: "",
  type: "",
  value: "",
  handleChange: null,
});
