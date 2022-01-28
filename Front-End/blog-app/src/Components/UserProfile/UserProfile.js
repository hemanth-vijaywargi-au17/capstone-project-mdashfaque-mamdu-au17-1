import React from "react";
import { useParams } from "react-router-dom";
import "./userprofile.css";
// React Redux
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux";

import { RiUserFill, RiUserLine } from "react-icons/ri";
import ArticleCard from "../Article/ArticleCard";
import Tabs from "../Tabs/Tabs";
import ResponsiveContainer from "../ResponsiveContainer";
import Tab from "../Tabs/Tab";

const UserProfile = () => {
  const { id } = useParams();
  // The User for which profile page was opened
  let clickedUser = useSelector((state) => state.app.allUsers[id]);
  // Currently LoggedIn User
  const { user: loggedInUser } = useSelector((state) => state.app);

  let user;
  if (clickedUser && loggedInUser) {
    user = clickedUser._id === loggedInUser._id ? loggedInUser : clickedUser;
  }

  const allPosts = useSelector((state) => state.app.allPosts);

  const dispatch = useDispatch();

  const follow = (e) => {
    e.stopPropagation();
    dispatch(
      actions.follow({
        followee_id: user._id,
        name: user.name,
      })
    );
  };

  const unfollow = (e) => {
    e.stopPropagation();
    dispatch(
      actions.unfollow({
        followee_id: user._id,
        name: user.name,
      })
    );
  };

  return (
    <ResponsiveContainer>
      {user ? (
        <>
          <div className="flex items-center gap-2 lg:gap-4 pt-4 px-4">
            <img
              src={user.profilePicURL}
              alt=""
              className="w-10 h-10 lg:w-14 lg:h-14 rounded-md"
            />
            <div className="font-semibold mr-2 lg:text-xl">{user.name}</div>
            {id !== loggedInUser._id ? (
              <>
                {loggedInUser.following.includes(user._id) ? (
                  <button
                    onClick={unfollow}
                    className="border-none article-btn"
                  >
                    <RiUserFill size={"1.2rem"} />
                    <span className="text-sm">Following</span>
                  </button>
                ) : (
                  <button onClick={follow} className="border-none article-btn">
                    <RiUserLine size={"1.2rem"} />
                    <span className="text-sm">Follow</span>
                  </button>
                )}
              </>
            ) : null}
          </div>

          <div className="px-4 flex gap-2 items-center border-solid border-2 border-x-0 border-t-0 border-gray-300 mb-2">
            <span className="text-sm lg:text-base">
              Joined {new Date(user.createdAt).toLocaleDateString()}
            </span>
            <p className="text-gray-600 hover:text-gray-800 cursor-pointer text-base lg:text-xl border-solid border-2 border-y-0 border-r-0 border-gray-500 pl-2">
              {user.followers.length} Followers
            </p>
          </div>

          <Tabs>
            <Tab title="Created Posts">
              {user.createdPosts.length !== 0 ? (
                <>
                  {user.createdPosts.map((post_id) => {
                    let post = allPosts[post_id];
                    if (post) {
                      return (
                        <ArticleCard
                          {...post}
                          key={post_id}
                          date={new Date(post.updatedAt)}
                        />
                      );
                    }
                    return null;
                  })}
                </>
              ) : (
                <span>{user.name} has not posted anything yet.</span>
              )}
            </Tab>
            <Tab title="Liked Posts">
              {user.likedPosts.length !== 0 ? (
                <>
                  {user.likedPosts.map((post_id) => {
                    let post = allPosts[post_id];
                    if (post) {
                      return (
                        <ArticleCard
                          {...post}
                          key={post_id}
                          date={new Date(post.updatedAt)}
                        />
                      );
                    }
                    return null;
                  })}
                </>
              ) : (
                <span>Looks Empty here!</span>
              )}
            </Tab>
            <Tab title="Reading List">
              {user.readingList.length !== 0 ? (
                <>
                  {user.readingList.map((post_id) => {
                    let post = allPosts[post_id];
                    if (post) {
                      return (
                        <ArticleCard
                          {...post}
                          key={post_id}
                          date={new Date(post.updatedAt)}
                        />
                      );
                    }
                    return null;
                  })}
                </>
              ) : (
                <span>Looks Empty here!</span>
              )}
            </Tab>
          </Tabs>
        </>
      ) : null}
    </ResponsiveContainer>
  );
};

export default UserProfile;
