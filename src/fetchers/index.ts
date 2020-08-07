import { isPlainObject } from "lodash-es";

export interface FetcherParams {
  url: string;
  method?: "GET";
  headers?: HeadersInit;
  body?: BodyInit | object;
}

const fetcher = async ({
  url,
  method = "GET",
  headers,
  body,
}: FetcherParams) => {
  if (isPlainObject(body)) {
    headers = { ...headers, "Content-Type": "application/json" };
    body = JSON.stringify(body);
  }

  const startTime = performance.now();

  const response = await fetch(url, {
    method,
    headers,
    body: body as BodyInit,
  });

  const endTime = performance.now() - startTime;

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const responseJson = await response.json();

  return { time: endTime, data: responseJson };
};

export const fetchUrlsArray = (array: string[]) => {
  return Promise.all(array.map(async (url) => await fetcher({ url })));
};

export default fetcher;
