import React from "react";
import { useSelector } from "react-redux";
import ArticleCard from "./Article/ArticleCard";

function Home() {
  const { allPosts } = useSelector((state) => state.app);

  return (
    <div className="flex flex-col gap-2 items-center">
      {Object.keys(allPosts).map((key) => {
        let post = allPosts[key]
        return (
          <ArticleCard
            {...post}
            key={post._id}
            date={new Date(post.updatedAt)}
          />
        );
      })}
    </div>
  );
}

export default Home;
