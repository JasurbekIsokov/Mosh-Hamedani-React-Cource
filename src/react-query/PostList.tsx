import InfinitePostList from "./InfinitePostLists";
import PaginationPostList from "./PaginationPostList";
import ParameterizedQueriesPost from "./ParameterizedQueriesPost";

const PostList = () => {
  return (
    <>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <ParameterizedQueriesPost />

        <PaginationPostList />
      </div>

      <InfinitePostList />
    </>
  );
};

export default PostList;
