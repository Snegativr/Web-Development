import React, { createContext, useContext, useState } from 'react';

const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([
  ]);


  const removeComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <CommentsContext.Provider
      value={{
        removeComment,
        addComment,
        comments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export const useCommentsContext = () => {
  const context = useContext(CommentsContext);
  return context;
};
