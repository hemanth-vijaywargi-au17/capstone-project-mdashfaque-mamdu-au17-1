import React from "react";
import { useSelector } from "react-redux";
import ArticleCard from "./Article/ArticleCard";
import Tabs from "./Tabs/Tabs";
import Tab from "./Tabs/Tab";
import ResponsiveContainer from "./ResponsiveContainer";

function Home() {
  const { user, allUsers, allPosts } = useSelector((state) => state.app);

  return (
    <ResponsiveContainer>
      <Tabs>
        <Tab title="All Posts">
          {Object.keys(allPosts).map((key) => {
            let post = allPosts[key];
            return (
              <ArticleCard
                {...post}
                key={post._id}
                date={new Date(post.updatedAt)}
              />
            );
          })}
        </Tab>
        {user.name ? (
          <Tab title="Your Feed">
            <span className="pl-2">Posts from people you follow will appear here.</span>
            {user.following.map((followee_id) => {
              let followee = allUsers[followee_id];
              if (followee) {
                return followee.createdPosts.map((post_id) => {
                  let post = allPosts[post_id];
                  if (post) {
                    return (
                      <ArticleCard
                        {...post}
                        key={post._id}
                        date={new Date(post.updatedAt)}
                      />
                    );
                  } else {
                    return null;
                  }
                });
              } else {
                return null;
              }
            })}
          </Tab>
        ) : null}
        {user.name ? (
          <Tab title="Your Reading List">
            {user.readingList.length !== 0 ? (
              <>
                {user.readingList.map((post_id) => {
                  let post = allPosts[post_id];
                  if (post) {
                    return (
                      <ArticleCard
                        {...post}
                        key={post._id}
                        date={new Date(post.updatedAt)}
                      />
                    );
                  }
                  return null;
                })}
              </>
            ) : (
              <span className="pl-2">Looks Empty here.</span>
            )}
          </Tab>
        ) : null}
      </Tabs>
    </ResponsiveContainer>
  );
}

export default Home;
