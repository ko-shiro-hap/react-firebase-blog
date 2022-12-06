import React from "react";

const CreatePost = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white flex rounded-lg flex-col justify-center h-96 w-96 gap-2.5 p-10 shadow-xl">
        <h1 className="text-2xl font-bold">記事を投稿する</h1>
        <div>
          <div className="text-lg font-medium">タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            className="w-full border rounded border-gray-500 px-1"
          />
        </div>
        <div className="pt-2">
          <div className="text-lg font-medium">投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            className="w-full h-32 border rounded border-gray-500 px-1"
          ></textarea>
        </div>
        <button className="py-1 w-full bg-blue-300 rounded text-white shadow-lg cursor-pointer hover:shadow-none hover:translate-y-1 transition-all">
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
