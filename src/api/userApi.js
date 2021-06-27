import { handleResponse, handleError } from "../utilities/apiUtilities";

const usersUrl = "https://localhost:44358/user";

export function getUsers() {
    return fetch(usersUrl).then(handleResponse).catch(handleError);
}

export function createUser({firstName, lastName, email, isMale, status}) {
    return fetch(usersUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({firstName, lastName, email, isMale, status}),
    })
      .then(handleResponse)
      .catch(handleError);
  }