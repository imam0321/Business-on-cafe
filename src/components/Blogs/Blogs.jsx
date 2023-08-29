import "../Blogs/Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blogs = ({ blog }) => {
  const { name, profile, date, time } = blog.author;
  const { picture, questions } = blog;
  const notify = () =>
    toast('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

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
          <div className="read">
            <span className="read-time">{time} min read</span>
            <span>
              <FontAwesomeIcon icon={faBookmark} />
            </span>
          </div>
        </div>
        <h1>{questions}</h1>
        <div>
          <p onClick={notify}>Mark as read</p>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
