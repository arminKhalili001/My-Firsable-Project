import axios from "axios";
import React, { Component, useEffect , useState } from "react";
import { Link } from "react-router-dom";


import ImageSlider from "../MainSlider/ImageSlider";
import './Home.css';

const Home = (props) => {
  const [Posts, setPosts] = useState([]);

  
  useEffect(() => {
    axios("http://localhost:5000/posts")
      .then(response => {
        setPosts(response.data)
      })
  })

  return (
    <div className="HomeApp">
      <ImageSlider />
      <div className="Home-contain">
        <div className="Home-posts">
          {Posts.map(post => {
            return (

                <Link to={post.to} className="Home-posts-Link">
              <div className="Home-posts-contain" key={post.id}>
                <h2>{post.title}</h2>
                <img className="Home-posts-image" src={post.image} />
              </div>
                </Link>
            )
          })}

        </div>
      </div>
    </div>
  )
}
export default Home;