import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import serverUrl from '../../../serverUrl';
import CoverImage from '../../organisms/CoverImage/CoverImage';
import TimeLine from '../../organisms/TimeLine/TimeLine';

import AuthContext from '../../../context/auth/authContext';

const TimeLinePage = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, userId } = authContext;

  const { timeline_id } = props.match.params;

  const [timelineData, setTimelineData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!editMode);

  const getTimelineData = async () => {
    const res = await axios.get(`${serverUrl}/api/v1/timeline/${timeline_id}`);
    setTimelineData(res.data.data);
  };

  useEffect(() => {
    getTimelineData();
  }, [timeline_id]);
  return (
    <>
      <Helmet>
        <title>{timelineData.title}</title>
        <link rel="canonical" href="https://tripen-dev.netlify.com" />
        <meta property="og:title" content={timelineData.title} />
        <meta property="og:description" content={timelineData.tagline} />
        <meta property="og:image" itemProp="image" content="https://source.unsplash.com/random" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <CoverImage bg={timelineData.coverImg} title={timelineData.title} tagline={timelineData.tagline} />
      <TimeLine posts={timelineData.posts} />
      <Container>

        {isAuthenticated && userId === timelineData.userId ? <Button variant="secondary" onClick={toggleEditMode}>Edit Timeline</Button> : null}
        {isAuthenticated && userId === timelineData.userId ? <DeleteButton timelineId={timeline_id} /> : null}
      </Container>
    </>
  );
};


export default TimeLinePage;
