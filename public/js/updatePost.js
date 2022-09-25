const editPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (title && content) {
    let response = "";

    if (event.submitter.id === "update-button") {
      response = await fetch("/update/" + id, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      response = await fetch("/delete/" + id, {
        method: "DELETE",
      });
    }

    if (response.ok) {
      document.location.replace("/user-posts");
    } else {
      alert("Failed to update or delete.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", editPostFormHandler);
