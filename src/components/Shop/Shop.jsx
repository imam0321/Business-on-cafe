import { useEffect } from 'react';
import '../Shop/Shop.css';
import { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Bookmark from '../Bookmark/Bookmark';

const Shop = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarked, setBookmarked] = useState([]);
    useEffect(()=>{
      fetch('blogs.json')
      .then(rse => rse.json())
      .then(data => setBlogs(data))
    }, []);

    const handelBookmarked = (blog)=>{
      const newBookmarked = [...bookmarked, blog];
      setBookmarked(newBookmarked);
    }

    return (
    <div className='shop-container'>
      <div className="blogs-container">
        {
          blogs.map(blog => <Blogs 
            key={blog.id}
            blog={blog}
            handelBookmarked={handelBookmarked}
            ></Blogs>)
        }
      </div>
      <div className="">
        <Bookmark 
        bookmarked={bookmarked}
        ></Bookmark>
      </div>
    </div>
  );
};

export default Shop;