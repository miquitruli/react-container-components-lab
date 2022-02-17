// Code MovieReviews Here
import React from "react";

const Review = ({ movieTitle, review }) => {
    return(
        <div className="review">
            <h1>{movieTitle}</h1>
            <p>{review}</p>
        </div>
    )
}

const MovieReviews = ({ reviews }) => {
    return (
      <div className="review-list">
            {reviews.map(Review)}
      </div>
    )
  }

  MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;
