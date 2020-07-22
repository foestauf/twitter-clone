import React, { useEffect, useState } from 'react';
import TweetCard from './TweetCard';
import NewTweet from './NewTweet';
import { db } from '../../App';

const TweetFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    feedWatcher();
  }, []);

  const feedWatcher = () => {
    db.collection('tweets')
      .where('tweetOwner', '==', 'jJfawvc6lsTysBSItMR1YfpxduJ3')
      .onSnapshot(function (querySnapshot) {
        const cities = [];
        querySnapshot.forEach(function (doc) {
          cities.push(doc.data());
        });
        setFeed(cities);
        console.log('Current cities in CA: ', cities.join(', '));
      });
  };
  return (
    <div>
      <NewTweet />
      {feed.map((value, index) => {
        return <TweetCard key={index} tweetOwner={value.tweetOwner} body={value.tweetText} />;
      })}
    </div>
  );
};

export default TweetFeed;
