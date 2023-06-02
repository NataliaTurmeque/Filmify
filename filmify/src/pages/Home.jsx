import React from 'react';
import Header from '../components/Header';
import "../style/Home.css";
import "../style/Carrusel.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '../components/cards';
import Footer from '../components/Footer';
import movieData from '../data/movies.json'


const Home = () => {
  
  const movie = movieData.movies
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
    ],
  };

  return (
    <div className="home">
      <Header></Header>
      <h1 className='title1'>FILMIFY</h1>
      <div className='slider-container'>
        <Slider className='slider-images' {...settings}>
            {movie.map((movie) => (
              <div className="card" key={movie.id}>
                  <img src={movie.imageUrl} alt={movie.title} className="card-image" />
                  <div className="card-description">
                    <p className='MovieTitle'>{movie.title}</p>
                    <p className='MovieDescrip'>{movie.description}</p>
                  </div>
              </div>
            ))}
          </Slider>
      </div>
           <h1 className='title2'>ACERCA DE</h1>
           <Cards/>
           
        <Footer/>
    </div>
  );}

  export default Home;