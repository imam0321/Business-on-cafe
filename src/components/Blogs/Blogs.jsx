import "../Blogs/Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blogs = ({ blog, handelBookmarked }) => {
  const { picture, questions, name, profile, date, time } = blog;

  return (
    <div className="blogs-container">
      <img src={picture} alt="" />
      <div>
        <div className="blogs-auth-info">
          <div className="blogs-author">
            <img src={profile} alt="" />
            <div className="auth-detail">
              <p className="auth-name">{name}</p>
              <p>{date}</p>
            </div>
          </div>
          <div onClick={() => handelBookmarked(blog)} className="read">
            <span className="read-time">{time} min read</span>
            <span>
              <FontAwesomeIcon icon={faBookmark} />
            </span>
          </div>
        </div>
        <h1>{questions}</h1>
        <div>
          <p>Mark as read</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
