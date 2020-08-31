import qs from "qs";

const CLIENT_ID = "62a6178220233f2";
const ROOT_URL = "https://api.imgur.com";

function loginToImgurAPI() {
  const queryParams = {
    client_id: CLIENT_ID,
    response_type: "token",
  };

  window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryParams)}`;
}

export { loginToImgurAPI };
