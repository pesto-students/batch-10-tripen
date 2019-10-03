import React, { useState, useEffect } from 'react';
import axios from 'axios';
import serverUrl from '../../../serverUrl';
import CoverImage from '../../organisms/CoverImage/CoverImage';
import TimeLine from '../../organisms/TimeLine/TimeLine';

const TimeLinePage = (props) => {
  const { timeline_id } = props.match.params;

  const [timelineData, setTimelineData] = useState({});

  const getTimelineData = async () => {
    console.log(props);
    const res = await axios.get(`${serverUrl}/api/v1/timeline/${timeline_id}`);
    setTimelineData(res.data.data);
  };

  useEffect(() => {
    getTimelineData();
  }, [timeline_id]);

  return (
    <>
      <CoverImage bg={timelineData.coverImg} title={timelineData.title} tagline={timelineData.tagline} />
      <TimeLine posts={timelineData.posts} />
    </>
  );
};


export default TimeLinePage;
