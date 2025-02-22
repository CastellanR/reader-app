import { GOOGLE_BOOKS_API_BASE_URL, GOOGLE_BOOKS_API_KEY } from "../config";

export const getData = async (path: string) => {
  const url = GOOGLE_BOOKS_API_BASE_URL + path;
  try {
    const response = await fetch(url + `&key=${GOOGLE_BOOKS_API_KEY}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred", error);
    }
  }
};

export const createEntity = async (path: string, entityBody: object) => {
  const url = GOOGLE_BOOKS_API_BASE_URL + path;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(entityBody),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred", error);
    }
  }
};
