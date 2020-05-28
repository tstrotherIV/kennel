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
};
