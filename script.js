function addPost() {
  const titleInput = document.getElementById("post-title");
  const contentInput = document.getElementById("post-content");

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert("Please fill in both title and content.");
    return;
  }

  const post = document.createElement("div");
  post.className = "post";

  const postTitle = document.createElement("div");
  postTitle.className = "post-title";
  postTitle.innerText = title;

  const postContent = document.createElement("div");
  postContent.className = "post-content";
  postContent.innerText = content;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = () => post.remove();

  post.appendChild(postTitle);
  post.appendChild(postContent);
  post.appendChild(deleteBtn);

  document.getElementById("posts").prepend(post);

  // Clear inputs
  titleInput.value = "";
  contentInput.value = "";
}

