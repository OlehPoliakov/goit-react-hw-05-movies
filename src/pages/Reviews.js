import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsList from 'components/ReviewsList';
import { getMovieReviews } from 'services/api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => {
      const reviewsArr = [];

      results.map(({ id, author, content }) => {
        const review = {
          id,
          author,
          text: content,
        };

        return reviewsArr.push(review);
      });

      setReviews(reviewsArr);
    });
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <ReviewsList reviews={reviews} />
  ) : (
    <h2>We don't have any reviews for this movie.</h2>
  );
}

export default Reviews;
