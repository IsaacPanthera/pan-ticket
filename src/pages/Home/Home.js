import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Events from "../../components/Events/Events";
import FeaturedEvents from "../../components/Featured Events/FeaturedEvents";
import Input from "../../components/Input/Input";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <header className="home-header">
        <div className="header-text">
          <p className="text-content">Connect and get ticket to</p>
          <p className="text-content">events near you based on your</p>
          <p className="text-content">interest</p>
        </div>
      </header>
      <section className="event-section">
        <form className="search-form">
          <div className="search-input">
            <Input placeholder={"Search Event"} />
          </div>
          <div className="category-input">
            <Input placeholder={"Categories"} />
          </div>
          {/* <div className="form-btn">
            <Button variation={"sec"} title={"Search Event"} />
          </div> */}
        </form>
      </section>

      <div className="event-container">
        <p className="event-title">Events near you</p>
        <div className="events">
          <Events
            img={"/images/image-1.jpg"}
            name="Event Name"
            date="date"
            location="location"
            price="#2000"
          />
          <Events
            img={"/images/image-2.jpg"}
            name="Event Name"
            date="date"
            location="location"
            price="#2000"
          />
          <Events
            img={"/images/image-3.jpg"}
            name="Event Name"
            date="date"
            location="location"
            price="#2000"
          />
          <Events
            img={"/images/img 4.jpg"}
            name="Event Name"
            date="date"
            location="location"
            price="#2000"
          />
          <Events
            img={"/images/image-5.jpg"}
            name="Event Name"
            date="date"
            location="location"
            price="#2000"
          />
          <Events
            img={"/images/image-6.jpg"}
            name="Event Name"
            date="date"
            location="location"
            price="#2000"
          />
          <Events
            img={"/images/img 7.jpg"}
            name="Event Name"
            date="date"
            location="location"
            price="#2000"
          />
          <Events
            img={"/images/image-8.jpg"}
            name="Event Name"
            date="date"
            location="location"
            price="#2000"
          />
          <Events
            img={"/images/image-9.jpg"}
            name="Event Name"
            date="date"
            location="location"
            price="#2000"
          />
        </div>
      </div>
      <div className="featured-events-container">
        <p className="sec-title">Featured Events</p>
        <div className="featured-sec">
          <FeaturedEvents
            img={"/images/Image 10.png"}
            location="Gbagada, Lagos on October 5, 2022"
            price="N2000"
            discount="Get 20% off"
            name="Event Name"
          />
          <FeaturedEvents
            img={"/images/Image 11.png"}
            location="Gbagada, Lagos on October 5, 2022"
            price="N2000"
            discount="Get 20% off"
            name="Event Name"
          />
        </div>
      </div>
    </>
  );
}

export default Home;



