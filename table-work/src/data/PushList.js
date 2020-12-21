import React , {component} from "react";
import JsonData from "./JsonData";
// import Fetch from "./Fetch";

function PushList() {
  return (
    <div>
      <div className="posts">
        { JsonData.map(post => {
            return (
            <div key={post.id} className="post">
             <h3>{post.title}</h3>
             <p>{post.content}</p>
            </div>
            )
        })}
      </div>
    </div>
  );
}

export default PushList;
