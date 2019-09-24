import React, { useState, useEffect } from "react";
import CoverImage from "../../organisms/CoverImage/CoverImage";
import TimeLine from "../../organisms/TimeLine/TimeLine";
import getTimelineDetails from "./getTimelineDetails";
import postTimelineDetails from "./postTimelineDetails";

const TimeLinePage = props => {
  const [timelineDetails, setTimelineDetails] = useState({});
  useEffect(() => {
    getTimelineDetails(setTimelineDetails, props.match.params.timeline_id);
  }, []);
  return (
    <>
      <CoverImage
        edit={props.edit}
        timelineId={props.match.params.timeline_id}
        title={timelineDetails.hasOwnProperty("data") ? timelineDetails.data.title : null}
        tagline={timelineDetails.hasOwnProperty("data") ? timelineDetails.data.tagline : null}
        data={timelineDetails.hasOwnProperty("data") ? timelineDetails.data : {}}
        postTimelineDetails={postTimelineDetails}
      />

      <TimeLine
        edit={props.edit}
        timelineId={props.match.params.timeline_id}
        timelineData={timelineDetails.data}
        postTimelineDetails={postTimelineDetails}
      />
    </>
  );
};

export default TimeLinePage;
