import React, { useState, useEffect } from "react";
import CoverImage from "../../organisms/CoverImage/CoverImage";
import TimeLine from "../../organisms/TimeLine/TimeLine";
import getTimelineDetails from "./getTimelineDetails";

const TimeLinePage = () => {
  const [timelineDetails, setTimelineDetails] = useState();
  useEffect(() => {
    getTimelineDetails(setTimelineDetails);
  }, []);
  return (
    <>
      <CoverImage></CoverImage>
      <TimeLine></TimeLine>
    </>
  );
};

export default TimeLinePage;
