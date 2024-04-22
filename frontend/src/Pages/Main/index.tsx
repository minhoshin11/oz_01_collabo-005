import CategoryBox from "./Categoryicons";
import MoveImages from "./Moveimages";
import NewPost from "./NewPost";
import "./index.css";

function Main() {
  return (
    <div className="mainContainer">
      <div className="newPostContainer">
        <div>실험중임</div>
        <NewPost />
        <CategoryBox />
        <MoveImages />
      </div>
    </div>
  );
}

export default Main;
