import * as querystring from "querystring";

export const parseNextUrl = (
  queryString: querystring.ParsedUrlQuery,
  defaultUrl: string
): string => {
  if (queryString && typeof queryString === "object" && queryString.next) {
    return Array.isArray(queryString.next)
      ? queryString.next[0]
      : queryString.next;
  } else {
    return defaultUrl;
  }
};
