import "./page.scss";
import Image from "next/image";
import {
  FaChess,
  FaPuzzlePiece,
  FaNewspaper,
  FaGlobeAfrica,
  FaQuestionCircle,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { BiSolidBinoculars } from "react-icons/bi";
import { IoIosPeople, IoIosMore } from "react-icons/io";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="main-content">
          <div className="logo">
            <Image src="/logo.png" alt="Chess.com" fill></Image>
          </div>
          <ul>
            <li>
              <FaChess size={28} />
              <h3>Play</h3>
            </li>
            <li>
              <FaPuzzlePiece size={28} />
              <h3>Puzzles</h3>
            </li>
            <li>
              <HiAcademicCap size={28} />
              <h3>Learn</h3>
            </li>
            <li>
              <BiSolidBinoculars size={28} />
              <h3>Watch</h3>
            </li>
            <li>
              <FaNewspaper size={28} />
              <h3>News</h3>
            </li>
            <li>
              <IoIosPeople size={28} />
              <h3>Social</h3>
            </li>
            <li>
              <IoIosMore size={28} />
              <h3>More</h3>
            </li>
          </ul>
          <input placeholder="Search"></input>
          <div className="button-secondary">
            <h4>Sign Up</h4>
          </div>
          <div className="button-primary">
            <h4>Log In</h4>
          </div>
        </div>
        <div className="info">
          <ul>
            <li>
              <FaGlobeAfrica size={18} />
              <h4>English</h4>
            </li>
            <li>
              <FaQuestionCircle size={18} />
              <h4>Help</h4>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
