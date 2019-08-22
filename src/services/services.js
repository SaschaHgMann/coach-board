export function getSessionCards() {
  return fetch("/api/sessions").then(res => res.json());
}

export function postSessionCards(data) {
  return fetchSessionCards("POST", data);
}

export function patchSessionCards(data, id) {
  return fetchSessionCards("PATCH", data, id);
}

export function deleteSessionCards(id) {
  return fetch("/api/sessions/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

function fetchSessionCards(method, data, id = "") {
  return fetch("/api/sessions/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
