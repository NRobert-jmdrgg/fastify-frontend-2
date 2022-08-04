import { Comment } from '../pages/movie.page';
import { Paper } from '@mui/material';

type CommentsProps = {
  comments: Comment[];
};

const Comments = ({ comments }: CommentsProps) => {
  return (
    <>
      {comments.map((comment) => {
        return (
          <Paper>
            <p>{comment.name}</p>
            <p>{comment.text}</p>
            <p>{comment.email}</p>
            <p>{comment.date.toString()}</p>
          </Paper>
        );
      })}
    </>
  );
};

export default Comments;
