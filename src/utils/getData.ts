export default async function getData<T>(request: RequestInfo): Promise<T> {
  // const response = await fetch(request);
  // const body = await response.json();
  // return body;

  return await fetch(request)
    .then((data) => data.json())
    .catch((error) => console.error(error));
}
