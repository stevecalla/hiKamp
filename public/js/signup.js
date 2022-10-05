const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-input").value.trim();
  const email = document.querySelector("#email-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();

  // CREATE NEW USER BY POSTING TO API/USERS/
  if (!username || !email || !password) {
    validationModal("Darn!! Login Failed", "Please enter valid username (can't be blank), email (xyz@example.com) and password (minimum of six characters).");
    return;
  }

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
      validationModal("Darn!! Login Failed", "Please enter valid username (can't be blank), email (xyz@example.com) and password (minimum of six characters).");
      return;
    }
  }

  //FETCH USER ID FOR NEW USER THEN POST TO REQ.SESSION.USERID
  if (username && email && password) {
    const response = await fetch("/api/users/userid", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
  }
};

// ADD VALIDATION MODAL BASED ON USER INPUT
function validationModal(title, body) {
$("#no-input-model").modal("show");
$("#no-input-title").text(title);
$("#no-input-body").text(body);
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
