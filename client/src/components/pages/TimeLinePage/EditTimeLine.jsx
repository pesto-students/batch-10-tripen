import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import serverUrl from '../../../serverUrl';


const EditTimeLine = (props) => {
  const timeline_id = props.match.params.id;
  const [timelineData, setTimelineData] = useState({ coverImg: null, tagline: null, posts: null, isPrivate:false });
  const blankPost = { title: null, content: null, _id: uuid.v4() };

  const [postData, setPostData] = useState([blankPost]);


  const getTimelineData = async () => {
    const res = await axios.get(`${serverUrl}/api/v1/timeline/${timeline_id}`);
    setTimelineData(res.data.data.timeline);
    setPostData(res.data.data.timeline.posts);
  };


  useEffect(() => {
    getTimelineData(timeline_id);
  }, [timeline_id]);

  const {
    title, tagline, coverImg,isPrivate
  } = timelineData || null;


  const onChange = (e) => {
    setTimelineData({ ...timelineData, [e.target.name]: e.target.value });
  };
const togglePrivate=()=>{
  setTimelineData({ ...timelineData, isPrivate:!isPrivate});
  console.log(isPrivate);
}

  const addPost = () => setPostData([...postData, blankPost]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(isPrivate);
  };


  return (
    <>
      <Container>
        {timelineData && (

          <Form onSubmit={onSubmit}>
            <h2>Cover Section</h2>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title..." value={title} onChange={onChange} name="title" />
              <Form.Label>Tagline</Form.Label>
              <Form.Control type="text" placeholder="Enter tagline..." value={tagline} name="tagline" onChange={onChange} />
              <Form.Label>Cover Image</Form.Label>
              <Form.Control type="text" placeholder="Add Cover Image" value={coverImg} name="coverImg" onChange={onChange} />
            </Form.Group>
            <h2>Posts</h2>
            {postData.length > 0 && postData.map((post) => {
              const { title, content, _id } = post;
              return (

                <Form.Group key={_id}>
                  <Form.Label>Post Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter title..." value={title} name="title" id={_id} />
                  <Form.Label>Content</Form.Label>
                  <Form.Control type="text" placeholder="Enter tagline..." value={content} name="content" id={_id} />
                </Form.Group>

              );
            })}
            <Button variant="primary" onClick={addPost}>
    Add Post
            </Button>
            {
                timeline_id === 'new' ? (
                  <Button variant="primary" type="submit">
                    {/* Button with post request */}
                Submit
                  </Button>
                ) : (
                  <Button variant="primary" type="submit">
                    {/* Button with put request */}
    Submit
                  </Button>
                )

            }
            <Button variant="primary" onClick={togglePrivate}>
            Your timeline is currently {isPrivate?'Private':'Public'}
            </Button>

          </Form>
        ) }
      </Container>
    </>

  );
};

export default EditTimeLine;
