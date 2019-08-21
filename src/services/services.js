export function getSessionCards() {
  return fetch("/api/sessions").then(res => res.json());
}

export function postSessionCard(data) {
  return fetchSessionCard("POST", data);
}

export function patchSessionCard(data, id) {
  return fetchSessionCard("PATCH", data, id);
}

export function deleteSessionCard(id) {
  return fetch("/api/sessions/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

function fetchSessionCard(method, data, id = "") {
  return fetch("/api/sessions/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
