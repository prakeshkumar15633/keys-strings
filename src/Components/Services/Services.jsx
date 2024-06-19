// import React from 'react';
// import './Services.css';

// function Services(){
//     return (
//         <div className="service-page">
//             <main>
//                 <section className="hero">
//                     <div className="hero-text">
//                         <h1>Vintage Service for Music Enthusiasts</h1>
//                         <p>
//                             Welcome to our vintage-inspired music website! Discover the timeless charm of guitar and keyboard melodies that transport you back in time. Immerse yourself in the rich heritage of musical craftsmanship and explore our curated services.
//                         </p>
//                         <button>Explore Our Services</button>
//                     </div>
//                     <div className="hero-image">
//                         <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-guitar-man-shabby-chic-and-vintage-art.jpg" alt="Musician with vintage instruments" />
//                     </div>
//                 </section>

//                 <section className="content">
//                     <div className="content-left">
//                         <div className="feature">
//                             <h2>Genererativc.</h2>
//                             <p>Color: Embracing the Past</p>
//                             <ul>
//                                 <li>Nostalgic Harmonies</li>
//                                 <li>Preserving the Essence</li>
//                                 <li>Vintage-Inspired Tones</li>
//                                 <li>Timeless Artistry</li>
//                             </ul>
//                             <p>
//                                 Uncover the Treasures of Vintage Music: Our Services Blend the Timeless with the Modern
//                             </p>
//                         </div>
//                     </div>
//                     <div className="content-right">
//                         <h3>Retro Resonance</h3>
//                         <h2>Discover the Allure of Vintage-Inspired Music</h2>
//                         <p>
//                             Immerse Yourself in the Captivating World of Vintage-Inspired Music. Our Curated Services Blend the Timeless Charm of Guitar and Keyboard Melodies with Modern Sensibilities.
//                         </p>
//                         <button>Find Out More</button>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// }

// export default Services;

// export default S1;
import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const ServiceSectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 20px;
  background-color: #101010;
  width: 100%;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  background-color: #181818;
  border-radius: 10px;
`;

const AdditionalSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px;
  background-color: #1a1a1a;
  width: 100%;
  color: #fff;
`;

const TextBlock = styled.div`
  background-color: ${props => props.bgColor || '#fff'};
  color: ${props => props.color || '#000'};
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  flex: 1 1 300px;
  max-width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #000;
`;

const ServicePage = () => {
    return (
      <Container>
        <HeaderWrapper>
          <h1>Music Lessons</h1>
          <Nav>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact Us</a>
          </Nav>
        </HeaderWrapper>
  
        <HeroSectionWrapper>
          <h1>Discover the Joy of Music</h1>
          <p>Welcome to our music website, where we offer exceptional guitar and piano lessons for both beginners and advanced musicians</p>
          <button className='btn btn-dark'>Enroll Now</button>
          <HeroImage src="https://c4.wallpaperflare.com/wallpaper/257/116/964/light-strings-music-sound-wallpaper-preview.jpg" alt="Music" />
        </HeroSectionWrapper>
  
        <ServiceSectionWrapper>
          <ServiceCard>
            <img src="https://c1.wallpaperflare.com/preview/87/872/945/guitar-amplifier-marshall-rock.jpg" alt="Guitar" width={500}  height={300} />
            <h2>Guitar Lessons</h2>
            <p>Explore our guitar lessons.</p>
          </ServiceCard>
          <ServiceCard>
            <img src="https://c4.wallpaperflare.com/wallpaper/893/101/145/piano-photo-backgrounds-wallpaper-preview.jpg" alt="Piano" width={500}  height={300} />
            <h2>Piano Lessons</h2>
            <p>Explore our piano lessons.</p>
          </ServiceCard>
        </ServiceSectionWrapper>
  
        <AdditionalSectionWrapper>
          <TextBlock>
            <h2>Hone Your Skills</h2>
            <HeroImage src="https://c1.wallpaperflare.com/preview/604/836/939/hostile-band-rock-guitar.jpg" alt="Music" />
            <p>Whether you're a complete beginner or an experienced player, our expert instructors will guide you through a personalized learning experience tailored to your goals and aspirations</p>
            <spam>Expand Your Repertoire</spam>
          </TextBlock>
          <TextBlock bgColor="#f5f5dc" color="#000">
            <h2>Nurture Your Passion</h2>
            <HeroImage src="https://c1.wallpaperflare.com/preview/540/282/508/audience-band-concert-crowd.jpg" alt="Music" />
            <p>Unlock Your Musical Potential. Dive into our comprehensive curriculum and explore a wide range of music genres, from classical and jazz to contemporary styles. Our lessons are designed to cater to your individual preferences, helping you develop a well-rounded musical skill set</p>
          </TextBlock>
          <TextBlock>
            <h2>Enrich Your</h2>
            <HeroImage src="https://c1.wallpaperflare.com/preview/403/884/988/rock-music-artist-concert.jpg" alt="Music" />
            <p>Discover the transformative power of our music lessons. Our experienced instructors will work closely with you to cultivate your skills, expand your knowledge, and help you achieve your musical goals. Embark on a Rewarding Musical Experience</p>
          </TextBlock>
          <TextBlock bgColor="#f5f5dc" color="#000">
            <h2>Immerse Yourself</h2>
            <HeroImage src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Music" />
            <p>Immerse yourself in our vibrant community of music enthusiasts and professionals.Explore our diverse range of music lessons and achieve your musical aspirations.Unlock Your Musical Potential. Dive into our comprehensive curriculum and explore a wide range of music genres, from classical and jazz to contemporary styles. Our lessons are designed to cater to your individual preferences, </p>
          </TextBlock>
          <TextBlock bgColor="#f5f5dc" color="#000">
            <h2>Unlock a New Level of Mastery</h2>
            <HeroImage src="https://e0.pxfuel.com/wallpapers/706/241/desktop-wallpaper-music-artist-band-art.jpg" alt="Music" />
            <p>Explore our diverse range of music lessons and achieve your musical aspirations.Unlock Your Musical Potential. Dive into our comprehensive curriculum and explore a wide range of music genres, from classical and jazz to contemporary styles. Our lessons are designed to cater to your individual preferences, helping you develop a well-rounded musical skill set</p>
          </TextBlock>
        </AdditionalSectionWrapper>
  
        <FooterWrapper>
          <p>&copy; 2024 Music Lessons. All rights reserved.</p>
        </FooterWrapper>
      </Container>
    );
  };
  
  export default ServicePage;