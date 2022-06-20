import React, { useReducer } from "react";
import { Context } from "react-native-reanimated/lib/types/lib/reanimated2/hook/commonTypes";

export interface BlogPost {
  title: string;
}

export interface Action {
  type: BlogpostAction;
  payload: BlogPost;
}

export interface Actions {
  addBlogPost: (dispatch: React.Dispatch<Action>) => () => void;
}

export interface BlogContext {
  data: BlogPost[];
  addBlogPost: (dispatch) => void;
}

export type Reducer = (state: BlogPost[], action: Action) => BlogPost[];

export enum BlogpostAction {
  ADD_BLOGPOST = "add_blogpost",
}

export default (
  reducer: Reducer,
  actions: Actions,
  initialState: BlogPost[]
) => {
  const BlogContext = React.createContext<Partial<BlogContext>>({});

  const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <BlogContext.Provider value={{ data: state, ...boundActions }}>
        {children}
      </BlogContext.Provider>
    );
  };

  return { BlogContext, BlogProvider };
};
