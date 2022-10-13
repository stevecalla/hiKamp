// ADD VALIDATION MODAL BASED ON USER INPUT
function shareModal(title, body) {
  $('#no-input-model').modal('show');
  $('#no-input-title').text(title);
  $('#no-input-body').text(body);
}