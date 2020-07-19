import React from 'react';
import TweetCard from './TweetCard';
import NewTweet from './NewTweet';

const TweetFeed = () => {
  return (
    <div>
      <NewTweet />
      <TweetCard />
    </div>
  );
};

export default TweetFeed;
