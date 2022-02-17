import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'uA5ms9h4Sbq3MiAArOB5mBkaKcfcl9VY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviews extends Component {
    constructor(){
        super();
    
        this.state = {
          reviews: []
        }
      }
    
    
      componentWillMount(){
        fetch(URL)
          .then(resp =>  resp.json)
          .then(resp => this.setState({ reviews: resp.results }))
      }
    
      render(){
        return(
          <div className="latest-movie-reviews">
            <h3>The Latest Reviews:</h3>
            <MovieReviews reviews={this.state.reviews} />
          </div>
        );
      }
}


export default LatestMovieReviews