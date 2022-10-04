import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastList from 'components/CastList';
import { getMovieCredits } from 'services/api';

function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => {
      const actorsArr = [];

      cast.map(({ id, name, profile_path }) => {
        const actor = {
          id,
          name,
          photo: profile_path,
        };

        return actorsArr.push(actor);
      });

      setActors(actorsArr);
    });
  }, [movieId]);

  return actors && <CastList actors={actors} />;
}

export default Cast;
