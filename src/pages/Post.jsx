import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntry(postId);
        setPost(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { fields } = post;
  console.log(fields);
  return (
    <div className="post">
      <div className="img">
        <img
          alt={fields.background.fields.title}
          src={fields.background.fields.file.url}
        />
      </div>
      <h1>{fields.header}</h1>
      <div>{documentToReactComponents(fields.description)}</div>
    </div>
  );
};

export default Post;
