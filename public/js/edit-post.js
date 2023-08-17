// get post id from splitting endpoint
const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

// update event post
const updateEventPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-update-post").value.trim();
  const content = document
    .querySelector("#content-update-post")
    .value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
      alert("Failed to update your post."); 
    }
  }
};

// delete post
const deleteEventPostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard"); 
  } else {
    alert("Failed to delete a post."); 
  }
};

// Event listeners
const updateEventPostButton = document.querySelector("#update-event-post");

if (updateEventPostButton) {
  updateEventPostButton.addEventListener("click", updateEventPostFormHandler);
}

const deleteEventPostButton = document.querySelector("#delete-post");

if (deleteEventPostButton) {
  deleteEventPostButton.addEventListener("click", deleteEventPostFormHandler);
}