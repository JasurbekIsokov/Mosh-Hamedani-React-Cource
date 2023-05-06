import { useState } from "react";
import UsePostList from "./hook/UsePostList";
import ParameterizedQueriesPost from "./ParameterizedQueriesPost";

const PostList = () => {
  // Parameterized Queries
  // const [userId, setUserId] = useState<number>();

  // const { data: posts, error, isLoading } = UsePostList(userId);

  // Pagination
  const pageSize = 10;

  const [page, setPage] = useState(1);

  const { data: posts, error, isLoading } = UsePostList({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      {/* Parameterized Queries */}
      <ParameterizedQueriesPost />

      <div>
        <ul className="list-group">
          {posts?.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
        </ul>
        <button
          disabled={page === 1}
          className="btn btn-primary  my-3"
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-primary my-3 ms-1"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
