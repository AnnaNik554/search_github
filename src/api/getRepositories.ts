export const getRepositories = async (searchString: string, controller: AbortController) => {
  const response = await fetch(`https://api.github.com/search/repositories?q=${searchString}`,
  {signal: controller.signal})
  const json = await response.json()
  return json.items
}