import { UtilityContext } from "@/contexts/utility-context";
import { useContext } from "react";

const useUtility = () => useContext(UtilityContext);

export default useUtility;
