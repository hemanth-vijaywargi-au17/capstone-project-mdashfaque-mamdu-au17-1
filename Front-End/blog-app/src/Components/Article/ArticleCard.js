import React from "react";

function ArticleCard(props) {
  const { author, title, summary, thumbnailURL, tags, updatedAt } = props;
  const date = new Date(updatedAt)
  return (
    <div className="grid grid-cols-4 gap-4 p-2 lg:w-2/5 mx-4 my-2 font-sans cursor-pointer">
      <div className="col-span-3 flex flex-col gap-2 justify-between">
        <div className="flex items-center gap-2">
          <img src={author.profilePicURL} alt="" className="w-6 h-6 rounded-full"/>
          <div className="text-sm font-semibold">{author.name}</div>
        </div>
        <div className="font-bold text-xl">{title}</div>
        <div className="text-gray-600 text-base line-clamp-2">{summary}</div>
        <div className="text-sm text-gray-600 flex gap-2 items-center">
          <div className="bg-gray-100 rounded-lg p-1 px-2">{date.toLocaleDateString(undefined, { month: 'short'})} {date.getDate()}, {date.getFullYear()}</div>
          <div className="bg-gray-100 rounded-lg p-1 px-2">{tags.length !== 0 ? tags[0] : null}</div>
        </div>
      </div>
      <div className="flex items-center col-span-1">
        <img src={thumbnailURL} alt="" className="object-cover h-full rounded"/>
      </div>
    </div>
  );
}

export default ArticleCard;
