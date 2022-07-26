import { MovieProps } from './movies.page';

type MovieDetailProps = {
  props: MovieProps;
};

const Movie = ({ props }: MovieDetailProps) => {
  return <div>Hello, from movie page</div>;
};

export default Movie;
