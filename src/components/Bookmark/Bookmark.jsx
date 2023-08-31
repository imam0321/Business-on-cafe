import "../Bookmark/Bookmark.css";

const Bookmark = ( {bookmarked}) => {


  let questions = '';
  let time = 0;
  for(const blog of bookmarked){
    time = time + parseInt(blog.time);
    questions = questions + blog.questions;
  }
  return (
    <section className="bookmark-container">
      <button className="spent-time-btn">Spent time on read : {time} min</button>
      <div className="blogs-count">
        <p>Bookmarked Blogs : {bookmarked.length}</p>
        <div className="bookmarked">
          <p>{questions}</p>
        </div>
      </div>
    </section>
  );
};

export default Bookmark;
