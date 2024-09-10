import Image from "next/image";
import { FaChessPawn, FaRobot } from "react-icons/fa";
export default function PageOne() {
  return (
    <>
      <div className="page-one">
        <div className="chess-board">
          <Image src="/chess-board.png" alt="Chess.com" fill></Image>
        </div>
        <div className="right">
          <h1>Play Chess Online on the #1 Site!</h1>
          <div className="stats">
            <h4>
              14,457,076 <span>Games Today</span>
            </h4>
            <h4>
              144,465 <span>Playing Now</span>
            </h4>
          </div>
          <div className="button-primary">
            <div className="button-row">
              <FaChessPawn size={50} />
              <div className="button-column">
                <h2>Play Online</h2>
                <h5>Play with someone at your level</h5>
              </div>
            </div>
          </div>
          <div className="button-secondary">
            <div className="button-row">
              <FaRobot size={50} />
              <div className="button-column">
                <h2>Play Bots</h2>
                <h5>Play vs customizable training bots</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
