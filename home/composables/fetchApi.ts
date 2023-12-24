import path from "path"

export default async function fetchApi<T>(url: string): Promise<Array<T> | null> {
  return ((await useFetch(path.join("/api", url))).data.value as Array<T>) || null
}
