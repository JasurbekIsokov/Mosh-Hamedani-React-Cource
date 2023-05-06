import { useState } from "react";
import Loader from "../components/Loader";
import UsePostList from "./hook/UsePostList";

const PaginationPostList = () => {
  const pageSize = 10;

  const [page, setPage] = useState(1);

  const { data: posts, error, isLoading } = UsePostList({ page, pageSize });

  if (isLoading) return <Loader />;

  if (error) return <p>{error.message}</p>;

  return (
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
  );
};

export default PaginationPostList;
