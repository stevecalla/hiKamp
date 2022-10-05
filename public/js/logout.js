const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    validationModal("Darn!! Campsite Not Found", "Please select a campsite/zipcode from the list then press enter.");
    alert("Failed to log out.");
    return;
  }
};

// ADD VALIDATION MODAL BASED ON USER INPUT
function validationModal(title, body) {
  $("#no-input-model").modal("show");
  $("#no-input-title").text(title);
  $("#no-input-body").text(body);
}

document.querySelector("#logout").addEventListener("click", logout);
