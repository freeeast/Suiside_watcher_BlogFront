import BlogCreate from "../conponents/Blogs/BlogCreate";
import {useHistory} from 'react-router-dom';

function BlogWrite_Page() {
  const history = useHistory();
  function addBlogHandler(BlogData) {
    fetch("https://suiside-dbs-default-rtdb.firebaseio.com/Blogs.json", {
      method: 'POST',
      body: JSON.stringify(BlogData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace('/')
    });
  }
  return (
    <section>
      <h1>this is BlogWrite</h1>
      <BlogCreate onAddBlog={addBlogHandler} />
    </section>
  );
}

export default BlogWrite_Page;
