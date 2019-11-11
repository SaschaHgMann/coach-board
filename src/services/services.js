///// Sessions 

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
  return fetchSessionCards("DELETE", null, id);
}

function fetchSessionCards(method, data, id = "") {
  return fetch("/api/sessions/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: data ? JSON.stringify(data) : undefined
  }).then(res => res.json());
}


///// Members 

export function getMemberCards() {
  return fetch("/api/members").then(res => res.json());
}

export function postMemberCards(data) {
  return fetchMemberCards("POST", data);
}

export function patchMemberCards(data, id) {
  return fetchMemberCards("PATCH", data, id);
}

export function deleteMemberCards(id) {
  return fetchMemberCards("DELETE", null, id);
}

function fetchMemberCards(method, data, id = "") {
  return fetch("/api/members/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: data ? JSON.stringify(data) : undefined
  }).then(res => res.json());
}
