const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#post-comment").value.trim();
  const commentPostId = document.querySelector("#post-comment");
  const postId = parseInt(commentPostId.dataset.post);

  if (comment) {
    const response = await fetch("/comment", {
      method: "POST",
      body: JSON.stringify({ comment, postId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/post/" + postId);
    } else {
      alert("Failed to save comment");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
