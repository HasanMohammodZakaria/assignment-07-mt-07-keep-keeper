import { useState } from "react";
import { TimeLinesContext } from "./TimeLinesContext";




const TimeLinesFriendsProvider = ({children}) => {

  const [timeLines, setTimeLines] = useState([]);

  const data = {
   timeLines,
   setTimeLines,
};

  return (
    <TimeLinesContext.Provider 
        value={data}>
        {children}
    </TimeLinesContext.Provider>
  );
};

export default TimeLinesFriendsProvider;
