import { useContext } from "react";
import { CelebrityContext } from "../providers/celebrity-provider";

const useCelebrity = () => {
  const { celebrityState, getCelebrity, getCelebrityKnownFor } =
    useContext(CelebrityContext);
  return { celebrityState, getCelebrity, getCelebrityKnownFor };
};

export default useCelebrity;
