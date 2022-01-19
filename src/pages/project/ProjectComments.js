import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '../../components/Avatar';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function ProjectComments({ project }) {
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore('projects');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });

    if (!response.error) {
      setNewComment('');
    }
  };

  return (
    <CommentContainer>
      <h4>Project comments</h4>
      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar src={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>
              <div className="comment-date">
                <p>
                  {formatDistanceToNow(comment.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Add a new comment</span>
          <textarea
            required
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        </label>
        <button className="btn">Add comment</button>
      </form>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  & label {
    margin-bottom: 0px;
  }
  & textarea {
    min-height: 40px;
    font-size: 1.5em;
  }

  /* comment list */
  & h4 {
    color: var(--heading-color);
  }
  & li {
    padding: 16px;
    border-radius: 4px;
    border: 1px solid #f2f2f2;
    margin-top: 20px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
    background: #fff;
  }
  .comment-author {
    display: flex;
    align-items: center;
    color: var(--title-color);
  }
  .comment-author .avatar {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .comment-date {
    color: var(--text-color);
    font-size: 0.9em;
    margin: 4px 0 10px;
  }
  .comment-content {
    color: var(--text-color);
    font-size: 0.9em;
  }
`;
