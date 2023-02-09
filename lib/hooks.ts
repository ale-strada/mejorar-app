const API_BASE_URL = "https://mejorar-app.vercel.app/";

export async function fetcher(api: RequestInfo, options: any) {
  const url = API_BASE_URL + api;

  const newOptions: any = options || {};
  newOptions.headers = newOptions.headers || {};
  newOptions.headers["Content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  try {
    const res = await fetch(url, newOptions);
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      console.log(data, "fetch");
      return data;
    } else {
      throw {
        message: "Hubo un error en la función fetchAPI",
        status: res.status,
      };
    }
  } catch (err) {
    console.log(err);
  }
}

export async function chatGPT(message: string) {
  const data = await fetcher("/api/ia", {
    method: "POST",
    body: { message },
  });
  console.log(data);

  return JSON.stringify(data);
}
