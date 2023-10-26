import { useRef } from "react";

import Card from "../UI/Card";
import classes from "./BlogCreate.module.css";

function BlogCreate(props) {
    const titleInputRef =useRef();
    const imageInputRef =useRef();
    const addressInputRef =useRef();
    const descriptionInputRef =useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const BlogData={
            title: enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription,
        }
        props.onAddBlog(BlogData);

    }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Blog Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Blog image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> Blog Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Blog Description</label>
          <textarea id="description" required rows="6" ref={descriptionInputRef}/>
        </div>
        <button className={classes.action}>Post</button>
      </form>
    </Card>
  );
}

export default BlogCreate;
