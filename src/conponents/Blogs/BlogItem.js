import Card from "../UI/Card";
import classes from "./BlogItem.module.css";

function BlogItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        {/* 這是加入圖片的代碼，如果不需要可以刪除
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        */}

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
          <button className={classes.action}>function to</button>
        </div>
      </Card>
    </li>
  );
}
export default BlogItem;
