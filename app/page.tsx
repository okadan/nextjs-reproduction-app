"use client";

import { fetchWithRequest, fetchWithUrl } from "./server-actions";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <button onClick={() => fetchWithUrl()}>fetch(url, options)</button>
      <button onClick={() => fetchWithRequest()}>fetch(Request)</button>
      <button onClick={() => fetch(new Request("http://localhost:3000/api", { method: "post", body: "hello" }))}>fetch(Request) from browser</button>
    </>
  );
}
