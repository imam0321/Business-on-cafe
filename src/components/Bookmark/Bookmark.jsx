import "../Bookmark/Bookmark.css";

const Bookmark = ( {bookmarked, times}) => {

  let totalTime = 0;
  for(const blog of times){
    totalTime = totalTime + parseInt(blog.author.time);
  }

  let questions = [];
  for(const blog of bookmarked){
    questions.push(blog.questions); 
  }
  return (
    <section className="bookmark-container">
      <button className="spent-time-btn">Spent time on read : {totalTime} min</button>
      <div className="blogs-count">
        <p>Bookmarked Blogs : {bookmarked.length}</p>
        <div className="bookmarked">
        {questions.map((blogQuestions, index) => (
            <p key={index}>{blogQuestions}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookmark;
