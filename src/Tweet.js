import React from 'react';
import TweetEmbed from 'react-tweet-embed';

import { connect } from 'react-redux';
import { }  from '../actionCreaters';

const Tweet = props => {
    return(
        <div>
        <TweetEmbed id={props.tweet_url.split("/")[5]} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);