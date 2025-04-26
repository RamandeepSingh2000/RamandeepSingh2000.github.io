//import NavigationTile from "./NavigationTile";
import Tile from "./Tile";
import WorkInProgress from "./WorkInProgress";

export default function BlogsTile() {
  //return <NavigationTile title="Blogs" route="/blogs" />;
  return (
    <Tile>
      <WorkInProgress title="Blogs" />
    </Tile>
  );
}
