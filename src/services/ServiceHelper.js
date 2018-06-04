import axios from 'axios';

const doRequest = (url, method, payload) => {
  const request = {
    method,
    url,
    data: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios(request);
};

export default class ServiceHelper {
  static SendGet(url) {
    return doRequest(url, 'get', null);
  }

  static SendPost(url, payload) {
    return doRequest(url, 'post', payload);
  }

  static SendPut(url, payload) {
    return doRequest(url, 'put', payload);
  }
}
