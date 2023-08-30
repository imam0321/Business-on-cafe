import "../Bookmark/Bookmark.css";

const Bookmark = () => {
  return (
    <section className="bookmark-container">
      <button className="spent-time-btn">Spent time on read : 0 min</button>
      <div className="blogs-count">
        <p>Bookmarked Blogs : 0</p>
        <div className="bookmarked">
          <p>bookmarked lest</p>
        </div>
      </div>
    </section>
  );
};

export default Bookmark;
