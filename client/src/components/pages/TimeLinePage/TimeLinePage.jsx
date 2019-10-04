import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import serverUrl from '../../../serverUrl';
import DeleteButton from './DeleteButton';
import CoverImage from '../../organisms/CoverImage/CoverImage';
import TimeLine from '../../organisms/TimeLine/TimeLine';
import AuthContext from '../../../context/auth/authContext';


const TimeLinePage = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, userId } = authContext;


  const { timeline_id } = props.match.params;

  const [timelineData, setTimelineData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const getTimelineData = async () => {
    const res = await axios.get(`${serverUrl}/api/v1/timeline/${timeline_id}`);
    setTimelineData(res.data.data);
  };

  useEffect(() => {
    getTimelineData(timeline_id);
  }, [timeline_id]);


  return (
    <>

      {timelineData ? (
        <>
        <Helmet>
        <title>{timelineData.title}</title>
        <link rel="canonical" href="https://tripen-dev.netlify.com" />
        <meta property="og:title" content={timelineData.title} />
        <meta property="og:description" content={timelineData.tagline} />
        <meta property="og:image" itemProp="image" content="https://source.unsplash.com/random" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
          <CoverImage bg={timelineData.timeline.coverImg} title={timelineData.timeline.title} tagline={timelineData.timeline.tagline} author={timelineData.user.name} editMode={editMode} />
          <TimeLine posts={timelineData.timeline.posts} editMode={editMode} />
          <Container>
            {isAuthenticated && userId === timelineData.user._id ? (
              <LinkContainer to={`/timeline/edit/${timeline_id}`}>
                <Button variant="secondary">Edit Timeline</Button>
              </LinkContainer>
            ) : null}
            {isAuthenticated && userId === timelineData.user._id ? <DeleteButton timelineId={timeline_id} /> : null}
          </Container>
          {' '}

        </>
      ) : <p>Loading</p>}
    </>

  );
};


export default TimeLinePage;
