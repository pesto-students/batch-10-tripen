import React, { createContext } from 'react';

export const PostContext = createContext();


const PostContextProvider = (props) => {
  const initialState = {
    ...props,
  };
  return (
    <PostContext.Provider value={{ ...initialState }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
