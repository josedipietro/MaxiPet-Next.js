import React from 'react';
import Header from '../components/Header/Header';
import { Carousel } from '../components/Carousel/Carousel';
import { bannerImages } from '../lib/constants';

function HomePage() {
  return (
    <main className="min-h-screen w-screen flex flex-col bg-background-100 dark:bg-black">
      <Header></Header>
      <Carousel images={bannerImages}></Carousel>
    </main>
  );
}

export default HomePage;
