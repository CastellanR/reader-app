const baseURL = "http://localhost:8080/v1";

export const getData = async (path: string) => {
  const url = baseURL + path;
  try {
    const response = await fetch(url, {
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
  const url = baseURL + path;
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
