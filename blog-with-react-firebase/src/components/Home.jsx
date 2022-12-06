import React from "react";

const Home = () => {
  return (
    <div className="w-full h-auto flex items-center flex-col p-5">
      <div className="container mx-auto bg-white shadow-xl rounded m-5 p-5">
        <div>
          <h1 className="text-2xl font-bold">タイトル</h1>
        </div>
        <div className="mt-5">
          今はReactの学習中です。これから頑張ってReactエンジニアとして活躍していきたいと思っています。よろしくお願いします。
          今はReactの学習中です。これから頑張ってReactエンジニアとして活躍していきたいと思っています。よろしくお願いします。
          今はReactの学習中です。これから頑張ってReactエンジニアとして活躍していきたいと思っています。よろしくお願いします。
          今はReactの学習中です。これから頑張ってReactエンジニアとして活躍していきたいと思っています。よろしくお願いします。
          今はReactの学習中です。これから頑張ってReactエンジニアとして活躍していきたいと思っています。よろしくお願いします。
        </div>
        <div className="flex justify-between mt-5 items-center">
          <h3 className="font-bold">@koshiro</h3>
          <button className="px-4 py-1 border-none bg-red-500 text-white hover:bg-red-700 rounded">
            削除
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
