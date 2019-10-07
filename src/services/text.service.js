import api from "./api";

function addText(text) {
  return api
    .post("/api/v1/texts/", text, {
      headers: {
        Authorization: `JWT ${localStorage && localStorage.getItem("token")}`
      }
    })
    .then(({ data }) => data);
}

function updateText(text) {
  return api
    .patch(`/api/v1/texts/${text.id}/`, text, {
      headers: {
        Authorization: `JWT ${localStorage && localStorage.getItem("token")}`
      }
    })
    .then(({ data }) => data);
}
function deleteText(text) {
  return api
    .delete(`/api/v1/texts/${text.id}/`, {
      headers: {
        Authorization: `JWT ${localStorage && localStorage.getItem("token")}`
      }
    })
    .then(({ data }) => data);
}
export default {
  addText,
  updateText,
  deleteText
};
