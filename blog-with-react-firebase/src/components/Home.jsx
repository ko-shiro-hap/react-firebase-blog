import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";

const Home = (isAuth) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({ doc })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="w-full h-auto flex items-center flex-col p-5">
      {postList.map((post) => {
        return (
          <div
            className="container mx-auto bg-white shadow-xl rounded m-5 p-5"
            key={post.id}
          >
            <div>
              <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <div className="mt-5">{post.postsText}</div>
            <div className="flex justify-between mt-5 items-center">
              <h3 className="font-bold">{post.author.username}</h3>

              {post.author.id ===
                (auth.currentUser ? auth.currentUser.uid : null) && (
                <button
                  className="px-4 py-1 border-none bg-red-500 text-white hover:bg-red-700 rounded"
                  onClick={() => handleDelete(post.id)}
                >
                  削除
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
