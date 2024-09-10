import "./page.scss";
import Sidebar from "./sidebar";
import PageOne from "./page-one";
import Image from "next/image";
import Quote from "./quote";
import TwoByTwoGrid from "./grid";
import { Fragment } from "react";
import {
  FaApple,
  FaTiktok,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";

export default function Home() {
  const links = [
    "Help",
    "Chess Terms",
    "About",
    "Jobs",
    "Developers",
    "User Agreement",
    "Privacy Policy",
    "Privacy Settings",
    "Fair Play",
    "Partners",
    "Compliance",
    "Chess.com © 2024",
  ];
  const icons = [
    FaApple,
    DiAndroid,
    FaTiktok,
    RiTwitterXFill,
    FaYoutube,
    FaTwitch,
    FaInstagram,
    FaDiscord,
  ];
  return (
    <main className="main">
      <div className="body">
        <Sidebar></Sidebar>
        <div className="home-main-content">
          <PageOne></PageOne>
          <div className="page-two">
            <div className="left">
              <h1>Solve Chess Puzzles</h1>
              <div className="button-primary">
                <h2>Solve Puzzles</h2>
              </div>
              <Quote
                image="quoter1.jpg" // Ensure this image is in the `public` folder or provide the correct path
                quote="Puzzles are the best way to improve pattern recognition, and no site does it better."
                quoter="Hikaru Nakamura"
              />
            </div>
            <div className="right">
              <Image src="/chess-board1.png" alt="Chess.com" fill></Image>
            </div>
          </div>
          <div className="page-three">
            <div className="right">
              <Image src="/chess-board2.png" alt="Chess.com" fill></Image>
            </div>
            <div className="left">
              <h1>Take Chess Lessons</h1>
              <div className="button-primary">
                <h2>Start Lessons</h2>
              </div>
              <Quote
                image="quoter2.jpg" // Ensure this image is in the `public` folder or provide the correct path
                quote="Puzzles are the best way to improve pattern recognition, and no site does it better."
                quoter="Hikaru Nakamura"
              />
            </div>
          </div>
          <h1 className="chess-today-heading">
            Follow what&#39;s happening in Chess Today.
          </h1>
          <TwoByTwoGrid />
          <div className="chess-today-btn">
            <div className="button-primary">
              <h2>Chess Today</h2>
            </div>
          </div>
          <div className="links">
            {links.map((link, index) => (
              <Fragment key={link}>
                <h5 className="link">{link}</h5>
                {index != links.length - 1 && <h5 className="seperator">•</h5>}
              </Fragment>
            ))}
          </div>
          <div className="icon-links">
            {icons.map((IconComponent, index) => (
              <Fragment key={index}>
                <IconComponent size={40} />
                {index == 1 && <div className="seperator"></div>}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
