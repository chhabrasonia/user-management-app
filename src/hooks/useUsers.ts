import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("Must use Provider");
  return context;
};