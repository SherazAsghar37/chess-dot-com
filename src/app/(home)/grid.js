import Image from "next/image";

export default function TwoByTwoGrid() {
  const titles = [
    "Carlsen Wins 4th SCC Title With Greatest Score Margin In SCC Final History",
    "Rubber Ducks And Madness In The Next Event Of The Chess.com Community Championships",
    "Magnus Carlsen vs. Hikaru Nakamura In Titled Tuesday",
    "Rare Fourth Moves",
  ];

  const channelNames = ["AnthonyLevin", "CHESScom", "CHESScom", "JanistanTV"];

  const tags = ["NM", null, null, "GM"];

  return (
    <>
      <div className="gridContainerStyle">
        {titles.map((title, index) => (
          <div key={index} className="gridItemStyle">
            <div className="thumbnail">
              <Image
                src={`/thumbnail${index + 1}.png`}
                alt="thumbnail"
                fill
              ></Image>
            </div>
            <h2>{title}</h2>
            <div className="channel">
              {tags[index] && <h4 className="tag">{tags[index]}</h4>}
              <h5 className="channel-name">{channelNames[index]}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
