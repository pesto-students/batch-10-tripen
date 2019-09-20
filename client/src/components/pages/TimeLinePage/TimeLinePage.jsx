import React, { useState, useEffect } from "react";
import CoverImage from "../../organisms/CoverImage/CoverImage";
import TimeLine from "../../organisms/TimeLine/TimeLine";
import getTimelineDetails from "./getTimelineDetails";

const TimeLinePage = props => {
  const [timelineDetails, setTimelineDetails] = useState({});
  console.log("props", props);
  useEffect(() => {
    getTimelineDetails(setTimelineDetails, props.match.params.timeline_id);
  }, []);
  return (
    <>
      <CoverImage
        title={timelineDetails.hasOwnProperty("data") ? timelineDetails.data.title : null}
        tagline={timelineDetails.hasOwnProperty("data") ? timelineDetails.data.tagline : null}
      ></CoverImage>
      <TimeLine timelineData={timelineDetails.data} />
    </>
  );
};

export default TimeLinePage;
