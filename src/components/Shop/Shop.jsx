import { useEffect } from 'react';
import '../Shop/Shop.css';
import { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Bookmark from '../Bookmark/Bookmark';

const Shop = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
      fetch('blogs.json')
      .then(rse => rse.json())
      .then(data => setBlogs(data))
    }, [])

    return (
    <div className='shop-container'>
      <div className="blogs-container">
        {
          blogs.map(blog => <Blogs 
            key={blog.id}
            blog={blog}
            ></Blogs>)
        }
      </div>
      <div className="">
        <Bookmark></Bookmark>
      </div>
    </div>
  );
};

export default Shop;