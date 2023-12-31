import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Tweet, TweetSkeleton } from 'react-tweet';
import Slider from 'react-slick';
import Masonry from 'react-masonry-css';
import './App.css'
import InfiniteScroll from 'react-infinite-scroll-component';


export default function App() {

  const tweetIds = [
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    "1732807986148745364",
    "1732697782056833489",
    "1731742788386234470",
    "1731601789273952415",
    "1732037230611595681",
    "1731753262070812824",
    "1731582893221351677",
    "1731627873260503053",
    "1731021689054765513",
    
  ];
  const [displayCount, setDisplayCount] = useState(10);

  const fetchMoreData = () => {
    // Increase the number of tweets displayed
    setDisplayCount(displayCount + 10);
  };

  // Automatically scroll to the bottom when displayCount changes
  useEffect(() => {
    let scrollDirection = 1; // 1 for down, -1 for up
    const scrollStep = 1; // Adjust the scroll step size as needed

    const scrollInterval = setInterval(() => {
      window.scrollBy(0, scrollStep * scrollDirection);

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        scrollDirection = -1; // Change direction to up
      } else if (window.scrollY === 0) {
        scrollDirection = 1; // Change direction to down
      }
    }, 10); // Adjust the interval as needed

    return () => clearInterval(scrollInterval);
  }, []);


  return (
    <div className='bg-[#0f172a]'>
      <InfiniteScroll
        dataLength={displayCount} 
        next={fetchMoreData} 
        hasMore={displayCount < tweetIds.length} 
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="tweet-container">
          {tweetIds.map(id => (
            <div key={id} className="tweet">
              <Tweet id={id} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

