// import Cookie from "js-cookie";

/* Type */
import { methods, auth } from "./constants";

/*
 * Headers configurations
 */
const headerConfig = (authRequired, accessToken) => {
  let headers = new Headers();

  headers.append(auth.content_type, auth.application_json);

  // const authCookie = Cookie.get(auth.COOKIE);
  // const token = authCookie ? JSON.parse(authCookie).access_token : '';

  if (authRequired) {
  
    headers.append(
      auth.authorization,
      `Bearer ${accessToken}`
    );
  }

  return headers;
};

/*
 * Fetcher configuration
 */
const fetchConfig = (
  payload,
  method,
  authRequired,
  accessToken
) => {
  let headers;

  headers = headerConfig(authRequired, accessToken);

  const headersBody = {
    method,
    headers,
  };

  if ((method === methods.post || method === methods.put) && payload !== null) {
    headersBody.body = JSON.stringify(payload);
  }

  return headersBody;
};


export const fetcher = async (
  url,
  payload,
  method,
  authRequired,
  accessToken
) => {
  const response = await fetch(url, fetchConfig(payload, method, authRequired, accessToken))
    .then(
      (res) =>
        (res.json().then((body) => {
          return {
            status: res.status,
            ok: res.ok,
            data: body,
          };
        }))
    )
    .catch((error) => {
      throw Error(error);
    });

  return response;
};
