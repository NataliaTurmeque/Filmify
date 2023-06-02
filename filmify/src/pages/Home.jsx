import React from 'react';
import Header from '../components/Header';
import "../style/Home.css";
import "../style/Carrusel.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '../components/cards';
import Footer from '../components/Footer';

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      imageUrl: "https://lumiere-a.akamaihd.net/v1/images/image_1e5c5703.jpeg",
      description: " Película : La cuarta entrega de la saga Vengadores es la culminación de 22 películas interconectadas y el clímax de un viaje épico. Los héroes de la Tierra por fin comprenderán lo frágil que es nuestra realidad—y los sacrificios que se deben hacer para conservarla—en una historia de amistad, de trabajo en equipo y de dejar a un lado las diferencias para superar un obstáculo imposible.",
    },{
      id:2,
      title: "Encanto",
      imageUrl: "https://lumiere-a.akamaihd.net/v1/images/encanto_ka_las_pay1_92ad7410.jpeg",
      description:" Película : Cuenta la historia de los Madrigal, una familia extraordinaria que vive escondida en las montañas de Colombia, en una casa mágica, en un pueblo vibrante, en un lugar maravilloso conocido como un Encanto.",
    },{
      id:3,
      title: "Babylon",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/BabylonOfficialTheatricalPoster2022.jpeg",
      description:" Película : Babylon' explora la ascensión y caída de grandes figuras en los inicios de Hollywood, una época llena de desmedidas ambiciones y excesos. Jack Conrad (Brad Pitt), un actor que haría cualquier cosa para llegar a donde quiere estar, conoce a Nellie LaRoy (Margot Robbie), una exactriz que decide ayudarle a comenzar en la industria, logrando que pronto se convierta en una estrella.",
    },{
      id:4,
      title: "El gato con botas : el ultimo deseo",
      imageUrl: "https://www.tierraadentro.cultura.gob.mx/wp-content/uploads/2023/01/Portada-de-Gato-con-Botas.jpg",
      description:" Película : Gato ya ha gastado ocho de sus nueve vidas, aunque él ya ha perdido la cuenta por el camino. Para recuperarlas, tendrá que lanzarse a la mayor aventura que jamás ha vivido hasta ahora. Emprenderá un épico viaje por la Selva Negra en busca de la mítica Estrella del Deseo con el fin de recuperar sus vidas perdidas.",
    },{
      id:5,
      title: "The last of us",
      imageUrl: "https://pics.filmaffinity.com/the_last_of_us-722385305-mmed.jpg",
      description:" Serie : La historia de 'The Last of Us' tiene lugar veinte años después de que la civilización moderna haya sido destruida. Joel, un superviviente de carácter recio, es contratado para sacar de contrabando a Ellie, una niña de 14 años, fuera de una opresiva zona de cuarentena. Lo que comienza como un pequeño trabajo pronto se convierte en un viaje brutal y desgarrador.",
    },{
      id:6,
      title: "Breaking bad",
      imageUrl: "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg",
      description:" Serie : Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina. ",
    },{
      id:7,
      title: "Lalaland",
      imageUrl: "https://es.web.img3.acsta.net/pictures/16/11/30/17/44/581119.jpg",
      description:" Película: Mia y Sebastian son dos jóvenes que quieren abrirse camino en el mundo de Hollywood. Mia es una joven aspirante a actriz que trabaja como camarera mientras acude a castings y Sebastian toca el piano en bares.",
    },{
      id:8,
      title: "Peaky Blinders",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
      description:" Serie : Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los asuntos ilegales, que dominan las apuestas clandestinas y se rigen mediante extorsiones.",
    },{
      id:9,
      title: "The walking dead",
      imageUrl: "https://upload.wikimedia.org/wikipedia/tr/thumb/8/89/The_Walking_Dead_2_sezon_afi%C5%9Fi.jpg/640px-The_Walking_Dead_2_sezon_afi%C5%9Fi.jpg",
      description:" Serie : The Walking Dead está basada en un mundo post-apocalíptico repleto de zombis, llamados caminantes, en el que un grupo de supervivientes debe de luchar por su vida frente a la plaga de estos y los peligros de otros grupos de humanos hostiles.",
    },{
      id:10,
      title: "Avatar 2",
      imageUrl: "https://es.web.img3.acsta.net/pictures/22/11/02/15/37/0544148.jpg",
      description:" Película : Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.",
    },
          // Agrega más objetos de películas aquí
  ];
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
            {movies.map((movie) => (
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