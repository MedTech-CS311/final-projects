import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Authors() {
  const [listOfAuthors, setListOfAuthors] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/author").then((response) => {
      setListOfAuthors(response.data);
    });
  }, []);
  return (
    <div>
      <div>
        <h1>Hacked News</h1>
        <h5>Top 10 Authors</h5>
        <div className="row">
          <div className="aParent">
            <span className="title">name</span>
            {listOfAuthors.map((user) => {
              return (
                <div>
                  <p>name: {user._id}</p>
                  {/* <p>karma :{user.karma}</p>
                <p> about : {user.about}</p> */}
                </div>
              );
            })}
          </div>
          <div className="aParent">
            <span className="author">karma</span>
            {listOfAuthors.map((user) => {
              return <p>{user.karma}</p>;
            })}
          </div>
          <div className="aParent">
            <span className="author">about</span>
            {listOfAuthors.map((user) => {
              return user.about ? (
                <p className="nowrap">{user.about}</p>
              ) : (
                <p className="nowrap">
                  no data available in the api about this section
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
