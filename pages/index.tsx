import React from 'react';
import Header from '../components/Header/Header';
import { Carousel } from '../components/Carousel/Carousel';
import { bannerImages } from '../lib/constants';
import { HomeLayout } from '../lib/layouts/HomeLayout';
import { Categories } from '../components/Categories/Categories';
import { FeaturedProducts } from '../components/FeaturedProducts/FeaturedProducts';
import { Banner } from '../components/Banner/Banner';
import { Footer } from '../components/Footer/Footer';
import { PopularProducts } from '../components/PopularProducts/PopularProducts';
import { LatestProducts } from '../components/LatestProducts/LatestProducts';
import { Services } from '../components/Services/Services';
import { Brands } from '../components/Brands/Brands';

function HomePage() {
  return (
    <HomeLayout>
      <Header></Header>
      <Carousel images={bannerImages}></Carousel>
      <Categories></Categories>
      <FeaturedProducts></FeaturedProducts>
      <Banner image="/dog_eating_food.png" alt="Dog eting food"></Banner>
      <PopularProducts></PopularProducts>
      <Banner image="/dog_playing.png" alt="Dog playing with ball"></Banner>
      <LatestProducts></LatestProducts>
      <Services></Services>
      <Brands></Brands>
      <Footer></Footer>
    </HomeLayout>
  );
}

export default HomePage;
