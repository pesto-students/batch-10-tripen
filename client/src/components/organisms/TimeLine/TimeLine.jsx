import React from 'react';
import { Container } from 'react-bootstrap';
import './TimeLine.css';
import Post from './Post';

const TimeLine = ({ posts, editMode }) =>
// const renderTimeline = () => posts.map((post) => return {<Post post={post} />});

  (
    <Container>
      <ul className="cbp_tmtimeline">
        {posts && posts.map((post) => <Post post={post} key={post._id} editMode={editMode} />)}
      </ul>
    </Container>
  );
export default TimeLine;
