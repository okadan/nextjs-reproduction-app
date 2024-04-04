"use server";

export async function fetchWithUrl() {
  fetch("http://localhost:3000/api", { method: "post", body: "hello" });
}

export async function fetchWithRequest() {
  fetch(new Request("http://localhost:3000/api", { method: "post", body: "hello" }));
}