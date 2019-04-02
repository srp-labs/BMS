import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RatingComponent extends Component {
    state = { rating: 0 };

    render() {
        return (
            <StarRatingComponent
                name="rating"
                starCount={5}
                value={this.state.rating}
                onStarClick={(rating) => { this.props.setRating(rating); this.setState({ rating }) }}
            />
        )
    }
}

export default RatingComponent;