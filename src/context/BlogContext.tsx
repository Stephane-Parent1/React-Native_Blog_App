import React, { useState } from "react";

interface BlogPosts {
  title: string;
}

interface BlogContext {
  data: BlogPosts[];
  addBlogPost: () => void;
}

export const BlogContext = React.createContext<Partial<BlogContext>>({});

export const BlogProvider: React.FC = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPosts[]>([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog post #${blogPosts.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
