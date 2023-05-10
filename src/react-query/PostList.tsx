import TodoList from "./TodoList";
import InfinitePostList from "./InfinitePostLists";
import PaginationPostList from "./PaginationPostList";
import ParameterizedQueriesPost from "./ParameterizedQueriesPost";

const PostList = () => {
  return (
    <>
      <InfinitePostList />

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <ParameterizedQueriesPost />

        <PaginationPostList />
      </div>
    </>
  );
};

export default PostList;
