import moize from "moize";
import fetch from "node-fetch";
export const memoizedApi = moize(
    async (name, request) =>
        await fetch(request).then((response) => response.json()),
    {
        isPromise: true,
        maxAge: 1000 * 60 * 60,
        transformArgs: (item) => item[0],
    }
);
