import React, { useContext, useEffect } from "react";
import { TimeContext } from "../../molecules/TimeLineCard/TimeContext";

const CardTimeDisplay = ({ timeVal }) => {
  const [moment, setMoment] = useContext(TimeContext);
  console.log("CardTimeDisplay :", timeVal);
  useEffect(() => {
    setMoment(new Date(timeVal));
  }, [timeVal]);
  const momentValue = moment;
  const date = momentValue.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const time = momentValue.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <>
      <time className='cbp_tmtime' dateTime={momentValue}>
        <span>{date.toString()}</span> <span>{time.toString()}</span>
      </time>
    </>
  );
};

export default CardTimeDisplay;
