
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './About.css';

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="about-us">
      <center><h1>About Us</h1></center>
      {/* {showDetails && ( */}
        <div>
    <p>Welcome to BookVerse, an online sanctuary for book enthusiasts seeking a 
        literary escape. Established in 2015, BookVerse originated from a shared passion for 
        storytelling and a vision to create a virtual haven for readers worldwide. Our journey began 
        with a humble collection and a commitment to deliver a diverse range of books, catering to every 
        reader's taste. At BookVerse, we are dedicated to fostering a community that celebrates the magic of 
        books. Our team, a group of devoted readers and tech enthusiasts, ensures an immersive and seamless experience 
        for our patrons. We embrace the values of integrity, exceptional service, and a devotion to the written word. Our mission is to curate an ever-expanding collection, connecting readers to the stories that resonate with their souls. Join us on this literary journey and explore a world of endless possibilities through the pages of BookVerse.
        At the heart of BookVerse is a team of passionate individuals — writers, editors, tech experts, and book enthusiasts. We are committed to fostering a space that celebrates the written word, ensuring that each visitor finds a literary companion. Guided by our core values of diversity, excellence, and customer satisfaction, BookVoyage endeavors to provide an immersive, user-friendly experience. Our mission is to be your guide on an endless voyage of literary exploration. </p>
          <center><h1>Delivery Timings</h1></center>
          <p>For all same day orders, orders have to be made before 5 pm on the same day. All orders made after this shall be considered for delivery latest by the next day.
We do not guarantee any timed delivery, our regular delivery timings are between 9:00 am to 9:00 pm. Clients can request specific timings in the Special Instructions section of payment form, we will try our best to honour the client's request but cannot commit 100% efficiency in the timing of delivery.
Delivery timings if promised cannot be guaranteed in case of special circumstances like extreme weather conditions, riots, strikes, elections, bandhs, during rush hour days like Valentine's Day, Mothers Day, Rakhi, New year Eve etc, the order cancelation would not be possible in such circumstances
</p>

          <center><h1>Discounts</h1></center>
          <p><center>All the discounts are decided by the team and none of the Discount and offers can be clubbed together.</center>
</p>
        </div>
      {/* )} */}
      {/* <center><button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'click to know About us'}
      </button></center> */}
     
    </div>
  );
};

export default About;

