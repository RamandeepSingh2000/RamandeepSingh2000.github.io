import styles from "../styles/Hobbies.module.css";
import Hobby from "./hobbies/Hobby";
import HobbyGraphic from "./hobbies/HobbyGraphic";
import HobbyGraphics from "./hobbies/HobbyGraphics";
import Page from "./Page";

export default function Hobbies() {
  return (
    <Page title="Hobbies">
      <div className={styles.container}>
        <Hobby
          title="CHESS"
          text="You know what is a good day? Playing against a person who is an equal match."
        >
          <HobbyGraphics>
            <HobbyGraphic imageURL="./graphic/hobbies/chess/chess-game.gif" />
          </HobbyGraphics>
        </Hobby>
        <Hobby
          title="CHARCOAL PORTRAIT ART"
          text="Yes. I can draw a little bit. Not bad, huh?"
        >
          <HobbyGraphics>
            <HobbyGraphic imageURL="./graphic/hobbies/charcoal-portraits/portrait_1.jpeg" />
            <HobbyGraphic imageURL="./graphic/hobbies/charcoal-portraits/portrait_2.jpeg" />
            <HobbyGraphic imageURL="./graphic/hobbies/charcoal-portraits/portrait_3.jpeg" />
            <HobbyGraphic imageURL="./graphic/hobbies/charcoal-portraits/portrait_4.jpeg" />
            <HobbyGraphic imageURL="./graphic/hobbies/charcoal-portraits/portrait_5.jpeg" />
          </HobbyGraphics>
        </Hobby>
        <Hobby
          title="ROCK & METAL"
          text="At some point, a lot of pop music just became nonsense lyrics with a catchy music. I discovered rock and metal music as an alternative and now I just can’t go back. Some of the bands I listen to are…"
        >
          <HobbyGraphics>
            <HobbyGraphic imageURL="./graphic/hobbies/music/linkin-park.jpg" />
            <HobbyGraphic imageURL="./graphic/hobbies/music/skillet.jpg" />
            <HobbyGraphic imageURL="./graphic/hobbies/music/thousand-foot-krutch.jpg" />
            <HobbyGraphic imageURL="./graphic/hobbies/music/three-days-grace.jpg" />
            <HobbyGraphic imageURL="./graphic/hobbies/music/breaking-benjamin.jpg" />
            <HobbyGraphic imageURL="./graphic/hobbies/music/disturbed.jpg" />
            <HobbyGraphic imageURL="./graphic/hobbies/music/dead-by-april.jpg" />
          </HobbyGraphics>
        </Hobby>
        <Hobby
          title="ANIME"
          text="One day I was switching channels on the television, and I came across my first anime. Dragon Ball Z was the beginning of me spending most of my teenage life immersing myself in content created by the lovely country of Japan. Couldn’t have spent those years better."
        >
          <HobbyGraphics>
            <HobbyGraphic imageURL="./graphic/hobbies/anime/dragon-ball-super-saiyan.gif" />
          </HobbyGraphics>
        </Hobby>
        <Hobby
          title="NUNCHUCKS"
          text="A newly acquired hobby. They are really fun to play with. Completely useless though."
        >
          <HobbyGraphics>
            <HobbyGraphic imageURL="./graphic/hobbies/nunchucks/rock-lee-anime.gif" />
          </HobbyGraphics>
        </Hobby>
        <Hobby
          title="MEDITATION"
          text="The world is a scary place. Unless you gain the correct perspective in life through self reflection. Meditation is something that can change your life."
        >
          <HobbyGraphics>
            <HobbyGraphic imageURL="./graphic/hobbies/meditation/inner-peace-po.gif" />
          </HobbyGraphics>
        </Hobby>
        <Hobby
          title="CALISTHENICS"
          text="Bodyweight exercises are my preferrable way to train. It is definitely not because weights are expensive."
        >
          <HobbyGraphics>
            <HobbyGraphic imageURL="./graphic/hobbies/calisthenics/handstand.png" />
            <HobbyGraphic imageURL="./graphic/hobbies/calisthenics/elbow-lever.png" />
            <HobbyGraphic imageURL="./graphic/hobbies/calisthenics/bridge.png" />
          </HobbyGraphics>
        </Hobby>
        <Hobby
          title="IN PROCESS OF ACQUIRING MORE"
          text="Fueled by the desire to learn.🔥 Limited by funding.😅"
        />
      </div>
    </Page>
  );
}
