import { useEffect } from 'react';
import '../Shop/Shop.css';
import { useState } from 'react';
import Blogs from '../Blogs/Blogs';

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
        <h1>Bookmark Blogs</h1>
      </div>
    </div>
  );
};

export default Shop;