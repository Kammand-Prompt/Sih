import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <h3>Kammand Prompt</h3>
        <p>
          Kammand Prompt is a SIH Team of Government College of Engineering,
          Karad consisting of 6 members. Which aims towards devlopment and
          betterment of our nation through mordern technologies
        </p>
        <ul class="socials">
          <li>
            <AiFillGithub />
          </li>
          <li>
            <a href="http://www.gcekarad.ac.in/">
              <FaSchool />
            </a>
          </li>
          <li>
            <AiOutlineTwitter />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
