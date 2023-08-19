import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./eventhome.css";
import EventInfo from "../../components/Event Info/EventInfo";

function EventHome() {
  return (
    <div>
      <Navbar />
      <div className="section">
        <div className="banner-sec"></div>
        <div className="banner-card">
          <p className="banner-title">Pelumi</p>
          <p className="banner-details">A musical play by Muyiwa Adigun</p>
        </div>
      </div>
      <div>
        <div className="event-detail">
          <EventInfo
            title={"Event Description"}
            description={`The play, "Pelumi," is a musical love story that revolves around Pelumi, a woman who was in a relationship with Adigun, a man with direction and purpose, but felt pressured by her mother to find love with someone else because of her mother's wealth and availability. You won’t want to miss this show on this year valentine.`}
          />
          <div>
            <p className="event-title">Date and Time</p>
            <div className="t-split">
              <p className="event-desc">14th February, 2022</p>
              <p className="event-desc">5PM Prompt</p>
            </div>
          </div>
          <EventInfo
            title={"Venue"}
            description={`Oduduwa Hall, Obafemi Awolowo University, Ile-Ife, Osun State`}
          />
        </div>
      </div>
      <div className="ticket-section">
        <p className="tsec-title">Get your ticket</p>
        <div className="tab-con">
          <TicketCategory
            ticketType="Regular Ticket"
            price="N5,000.00"
            color="green"
          />
          <TicketCategory
            ticketType="VIP Ticket"
            price="N50,000.00"
            color="orange"
          />
          <TicketCategory
            ticketType="Premium Ticket"
            price="N500,000.00"
            color="light-blue"
          />
          <TicketCategory
            ticketType="Royalty Ticket"
            price="N1,000, 000.00"
            color="purple"
          />
        </div>
      </div>
      <div className="prom-detail">
        <div className="heading">
          <p>MUYIWA ADIGUN SHOW</p>
        </div>
        <div className="text-1">
          <p>
            Muyiwa Adigun Show, the producer and promoter of "PELUMI," is a
            non-governmental organization with the goal of uniting families and
            entertaining wisdom. Through entertainment, we hope to proclaim and
            promote the practice of sound family values, as well as educate
            young people on the dynamics of a fulfilling and decent
            relationship, thereby building a peaceful and productive society and
            nation.
          </p>
          <p className="text-2">
            We pursue this vision by organizing conferences, seminars, talk
            shows, online articles, and podcasts, as well as stage plays in
            places where young people congregate.
          </p>
        </div>
        <div className="info">
          <div className="num">
            <p>Phone Number</p>
            <p className="number">08111111111</p>
          </div>
          <div className="email">
            <p>Email</p>
            <p className="mail">topeisaac96@gmail.com</p>
          </div>
          <div className="twitter">
            <p>Twitter</p>
            <p className="tweet">@yelue</p>
          </div>
          <div className="ig">
            <p>Instagram</p>
            <p className="insta">@alade_yelu</p>
          </div>
          <div className="fb">
            <p>Facebook</p>
            <p className="fbook">facebook.com/isaac</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHome;

function TicketCategory({ color, ticketType, price }) {
  return (
    <div className="t-table">
      <div className="t-color">
        <div className={`${color}`}></div>
        <p className="t-type">{ticketType}</p>
      </div>
      <p className="t-price">{price}</p>
      <div className="qnty">
        <p className="q-type">Quantity</p>
        <div className="q-box">
          <p className="zero">0</p>
          <div className="q-box-box"></div>
        </div>
      </div>
      <button className="t-btn">Get Ticket</button>
    </div>
  );
}
