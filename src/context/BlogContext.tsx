import React, { useReducer, useState } from "react";
import createDataContext, {
  Action,
  BlogPost,
  BlogpostAction,
} from "./createDataContext";

const blogReducer = (state: BlogPost[], action: Action) => {
  switch (action.type) {
    case BlogpostAction.ADD_BLOGPOST:
      return [...state, { title: `Blog post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: BlogpostAction.ADD_BLOGPOST });
  };
};

export const { BlogContext, BlogProvider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
