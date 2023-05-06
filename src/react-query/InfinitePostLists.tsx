import React from "react";
import Loader from "../components/Loader";
import UseInfinitePostList from "./hook/UseInfinitePostList";

const InfinitePostList = () => {
  const pageSize = 10;

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    UseInfinitePostList({ pageSize });

  if (isLoading) return <Loader />;

  if (error) return <p>{error.message}</p>;

  return (
    <div style={{ margin: "50px auto" }}>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default InfinitePostList;
