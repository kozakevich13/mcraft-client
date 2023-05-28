import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import client from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../style/Home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const home = await client.getEntries({
          content_type: "home",
          limit: "10",
        });
        setPosts(home.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map(({ sys, fields }) => (
          <div className="post" key={sys.id}>
            <div className="img">
              <img
                alt={fields.background.fields.title}
                src={fields.background.fields.file.url}
              />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${sys.id}`}>
                <h1>{fields.header}</h1>
              </Link>
              <p>{documentToReactComponents(fields.description)}</p>
              <Link to={`/post/${sys.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
