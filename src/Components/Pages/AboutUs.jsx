import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import image from '../../Assests/pic1.avif';
import secondaryImage from '../../Assests/carousel.jpg'; // Import your secondary image
import profileImage1 from '../../Assests/male.jpg'; // Import profile image 1
import profileImage2 from '../../Assests/female.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
const AboutUs = () => {
  const imgHeight = '30vh';
  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollVisibility = () => {
    if (window.scrollY > 200) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };

  window.addEventListener('scroll', handleScrollVisibility);
  return (
    <Layout>
      <div style={{backgroundColor:'linen'}}>
      <div
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          marginLeft: '30px',
          marginRight: '30px',
          textAlign: 'center',
          backgroundColor:'linen'
        }}
      >
        <h1 style={{ fontWeight: 'bold', fontSize: '3rem', color: 'maroon' }}>
          About Us
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'navy' }}>
          Our Story || History of the Company || Voice of the Founder
        </p>
      </div>
      <div
        style={{
          backgroundColor: 'linen',
          padding: '20px',
         
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          margin: '30px',
          borderRadius:'5%',
          
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            color: 'olivedrab',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          <strong>Our Mission</strong>
        </h2>
        <p style={{ fontSize: '1rem', color: 'sienna', textAlign: 'left' }}>
          In 2020, amidst global upheaval, a group of visionary individuals
          founded a pesticide company with a mission: to address agricultural
          challenges while championing environmental stewardship. Despite
          financial constraints and industry skepticism, they embarked on a
          journey of innovation, drawing inspiration from nature's pest control
          mechanisms.
          <br />
          <br />
          Through tireless experimentation, they developed effective,
          environmentally friendly solutions. Despite setbacks, their commitment
          to community engagement remained unwavering. Collaborations with local
          communities and international organizations validated their vision.
          <br />
          <br />
          Today, the company stands as an industry leader, serving millions
          globally while upholding its founding principles. It's a testament to
          the power of vision, perseverance, and collaboration in driving
          positive change in agriculture.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '30px',
          borderRadius:'5%',
          padding: '20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',

          
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            src={secondaryImage}
            alt="Secondary"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </div>
        <div style={{ flex: 1, textAlign: 'left', marginTop: '20px' }}>
          <h2
            style={{
              fontSize: '2rem',
              color: 'olivedrab',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            <strong>Voice of the Founder</strong>
          </h2>
          <p style={{ fontSize: '1rem', color: 'sienna', textAlign: 'left' }}>
            As the founder of our company, I am deeply committed to our mission
            of revolutionizing the agricultural industry through innovation,
            sustainability, and social responsibility. Our journey began with a
            vision to address the pressing challenges facing farmers and the
            environment, and it has been marked by perseverance, dedication,
            and unwavering belief in our purpose.
            <br />
            <br />
            From the earliest days of our company, we set out to challenge the
            status quo, to push the boundaries of what was possible, and to
            create solutions that not only protect crops but also safeguard our
            planet for future generations. It has been a journey of highs and
            lows, of triumphs and setbacks, but through it all, we have
            remained steadfast in our commitment to creating positive change.
            <br />
            <br />
            Today, I am proud to see how far we have come. Our products are not
            just tools for pest control; they are symbols of our dedication to
            environmental stewardship and our belief in the power of innovation
            to transform industries. But our work is far from over. As we look
            to the future, we are driven by a shared sense of purpose and a
            determination to continue pushing the boundaries of what is
            possible.
            <br />
            <br />
            To our customers, partners, and supporters, I extend my deepest
            gratitude. Your belief in our mission fuels our passion and inspires
            us to reach even greater heights. Together, we will continue to
            lead the way towards a more sustainable and prosperous future for
            all.
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '30px',
          borderRadius:'5%',
          padding: '20px'
          , boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ flex: 1, textAlign: 'left', marginBottom: '20px' }}>
          <h2
            style={{
              fontSize: '2rem',
              color: 'olivedrab',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            <strong>Responsibilities</strong>
          </h2>
          <p style={{ fontSize: '1rem', color: 'sienna', textAlign: 'left' }}>
            As a pest control company, we recognize the critical importance of
            environmental responsibility in our operations. We are committed to
            developing and providing solutions that not only protect crops and
            human health but also minimize our impact on the environment.
            <br />
            <br />
            Our approach to pest management is rooted in sustainability and
            eco-conscious practices. We prioritize the use of environmentally
            friendly formulations and techniques that reduce chemical usage,
            minimize pollution, and preserve biodiversity.
            <br />
            <br />
            Additionally, we actively engage with local communities and farmers
            to promote sustainable farming practices and provide education on
            integrated pest management strategies. By working together with our
            stakeholders, we strive to create a healthier and more sustainable
            environment for future generations.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={secondaryImage}
            alt="Secondary"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30px',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
          <div style={{ maxWidth: '300px', textAlign: 'center', margin: '10px' }}>
            <img src={profileImage1} alt="Profile 1" style={{ maxWidth: '100%', borderRadius: '50%' }} />
            <h3 style={{ marginTop: '10px', color: 'sienna' }}>John Doe</h3>
            <p style={{ color: '#888' }}>CEO</p>
          </div>
          <div style={{ maxWidth: '300px', textAlign: 'center', margin: '10px' }}>
            <img src={profileImage2} alt="Profile 2" style={{ maxWidth: '100%', borderRadius: '50%' }} />
            <h3 style={{ marginTop: '10px', color: 'sienna' }}>Jane Smith</h3>
            <p style={{ color: '#888' }}>CTO</p>
          </div>
        </div>
      </div>
      <div
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: 'center',
    flexWrap: 'wrap' // Ensure items wrap to the next line if they don't fit
  }}
>
  <div
    style={{
      width: '100%', // Make it take full width on small screens
      maxWidth: 300, // Limit the width on larger screens
      textAlign: "center",
      margin: 5,
      backgroundColor: "#eee",
      borderRadius: 10,
      padding: 20
    }}
  >
    <h3 style={{ color: "sienna", marginTop: 10 }}>Services</h3>
    <p style={{ color: "#888", fontSize: 'calc(10px + 2vw)' }}>1000+</p>
  </div>
  <div
    style={{
      width: '100%', // Make it take full width on small screens
      maxWidth: 300, // Limit the width on larger screens
      textAlign: "center",
      margin: 5,
      backgroundColor: "#eee",
      borderRadius: 10,
      padding: 20
    }}
  >
    <h3 style={{ color: "sienna", marginTop: 10 }}>Clients</h3>
    <p style={{ color: "#888", fontSize: 'calc(10px + 2vw)' }}>100+ </p>
  </div>
  <div
    style={{
      width: '100%', // Make it take full width on small screens
      maxWidth: 300, // Limit the width on larger screens
      textAlign: "center",
      margin: 5,
      backgroundColor: "#eee",
      borderRadius: 10,
      padding: 20
    }}
  >
    <h3 style={{ color: "sienna", marginTop: 10 }}>Experience</h3>
    <p style={{ color: "#888", fontSize: 'calc(10px + 2vw)' }}>10+ Years</p>
  </div>
</div>


</div>
{showGoToTop && (
  <div
    style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '10px',
      backgroundColor: 'skyblue', // Background color for the arrow icon
      borderRadius: '50%', // Rounded border to make it circular
      cursor: 'pointer',
      zIndex: '9999',
    }}
    onClick={handleScroll}
  >
    <FontAwesomeIcon icon={faArrowUp} size='2x' style={{ color: 'black' }} />
  </div>
)}
      </Layout>
  );
};

export default AboutUs;
