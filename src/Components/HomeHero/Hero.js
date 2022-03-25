import React from "react";
import "./Hero.css";
const HeroSection = () => {
  return (
    <div>
      <div className="row div1">
        <div className="column">
          <img
            src="https://i.ytimg.com/vi/JHu2YuadxKg/mqdefault.jpg"
            alt="sih-logo"
          />
        </div>
        <div className="column ">
          <p className="text">
            Smart India Hackathon 2022 is a nationwide initiative to provide
            students a platform to solve some of the pressing problems we face
            in our daily lives, and thus inculcate a culture of product
            innovation and a mindset of problem solving.
          </p>
        </div>
      </div>
      <div className="row div2">
        <div className="column">
          <img
            className="ideaImage"
            src="https://smallimg.pngkey.com/png/small/785-7856350_download-free-business-icons-idea-computer-brainstorming-brainstorm.png"
            alt="Problem-Statement"
          />
        </div>
        <div className="column">
          <h4 className="descriptionH4">Problem Statement:</h4>
          <p className="pDescription">
            A solution for identification of India-based news websites, and
            YouTube based news channels.
          </p>
          <h4 className="descriptionH4">Description: </h4>
          <p className="pDescription">
            India has emerged as a hub for a highly diverse and vibrant online
            news media industry. Online news is disseminated through websites as
            well as social media platforms. In this regard, a mechanism for
            identification of such publishers of news and current affairs
            content over the digital media is required. The solution may only
            analyze the nature of content on various websites and social media
            handles of news publishers operating in India, and identify them.
            The solution is required to be effective across major Indian
            regional languages, and may also be capable of identifying and
            recording the contact details of such publishers, wherever
            available.
          </p>
        </div>
      </div>
      <div className="row div3">
        <div className="column">
          <img
            className="svg"
            src="https://media.istockphoto.com/vectors/lightbulb-vector-icon-isolated-on-white-background-vector-vector-id1156672384?k=20&m=1156672384&s=612x612&w=0&h=RXrz7WImZVbmRIe8j6RCgbe0Wxvn25NnMSORxn50EEI="
            alt="Pimage"
          />
        </div>
        <div className="column">
          <h4 className="descriptionH4">Solution</h4>
          <p className="pDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            eveniet possimus delectus ab, autem distinctio sapiente quos.
            Doloribus deleniti numquam possimus aut quam nihil id! Nulla,
            dolorem distinctio ea excepturi fuga saepe asperiores ratione
            voluptates quod ipsum tempora illo a beatae assumenda delectus
            architecto doloremque nostrum, provident ullam? Optio, laudantium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
