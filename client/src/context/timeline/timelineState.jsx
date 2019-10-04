import React, { useReducer } from 'react';
import axios from 'axios';
import serverUrl from '../../serverUrl';
import TimelineContext from './timelineContext';
import timelineReducer from './timelineReducer';

import {
  GET_TIMELINE,
} from '../types';

const TimelineState = ({ children }) => {
  const initialState = {
    timeline: null,
    user: null,
  };
  const [state, dispatch] = useReducer(timelineReducer, initialState);

  const getTimeline = async (id) => {
    try {
      const res = await axios.get(`${serverUrl}/api/v1/timeline/${id}`);
      dispatch({ type: GET_TIMELINE, payload: res.data.data });
    } catch (error) {
      return null;
    }
  };

  //   // Add contact
  //   const addContact = async (contact) => {
  //     const config = {
  //       headers: {
  //         'Context-Type': 'application/json',
  //       },
  //     };
  //     try {
  //       const res = await axios.post('/api/contacts', contact, config);
  //       dispatch({ type: ADD_CONTACT, payload: res.data });
  //     } catch (error) {
  //       dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
  //     }
  //   };
  //   // Delete contact
  //   const deleteContact = async (id) => {
  //     await axios.delete(`/api/contacts/${id}`);
  //     try {
  //       dispatch({ type: DELETE_CONTACT, payload: id });
  //     } catch (error) {
  //       dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
  //     }
  //   };
  //   // Clear contacts
  //   const clearContacts = () => dispatch({ type: CLEAR_CONTACTS });
  //   // Set current contact
  //   const setCurrent = (contact) => {
  //     dispatch({ type: SET_CURRENT, payload: contact });
  //   };
  //   // Clear current contact
  //   const clearCurrent = () => {
  //     dispatch({ type: CLEAR_CURRENT });
  //   };
  //   // Update contact
  //   const updateContact = async (contact) => {
  //     const config = {
  //       headers: {
  //         'Context-Type': 'application/json',
  //       },
  //     };
  //     try {
  //       const res = await axios.put(
  //         `/api/contacts${contact._id}`,
  //         contact,
  //         config,
  //       );
  //       dispatch({ type: UPDATE_CONTACT, payload: res.data });
  //     } catch (error) {
  //       dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
  //     }
  //   };
  //   // Filter contacts
  //   const filterContacts = (text) => {
  //     dispatch({ type: FILTER_CONTACTS, payload: text });
  //   };
  //   // Clear filter
  //   const clearFilter = () => {
  //     dispatch({ type: CLEAR_FILTER });
  //   };
  return (
    <TimelineContext.Provider
      value={
        {
          getTimeline,
          posts: state.posts,
          timeline: state.timeline,
          user: state.timeline,
        }
      }
    >
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineState;
