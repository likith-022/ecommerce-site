import usePosts from "../hooks/post-hook";

const PostsPage = () => {

  const { posts, total, isLoading, error } = usePosts();

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Community Posts</h2>

      {isLoading && <p>Loading posts...</p>}

      {error && (
        <div className="alert alert-danger">
          {error.message}
        </div>
      )}

      <p className="text-muted">Total Posts: {total}</p>

      <div className="row g-4">
        {posts.map((post) => (
          <div className="col-md-6 col-lg-4" key={post.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <span className="badge bg-success mb-3">
                  Post #{post.id}
                </span>

                <h5 className="fw-bold">{post.title}</h5>

                <p className="text-secondary">{post.body}</p>

                <div className="border-top pt-3 small text-muted">
                  <span className="me-3">
                    Likes: {post.reactions.likes}
                  </span>
                  <span className="me-3">
                    Views: {post.views}
                  </span>
                  <span>User: {post.userId}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
