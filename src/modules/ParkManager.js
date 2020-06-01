const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/parks/${id}`).then((result) => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/parks`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/parks/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newPark) {
    return fetch(`${remoteURL}/parks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPark),
    }).then((data) => data.json());
  },
};
