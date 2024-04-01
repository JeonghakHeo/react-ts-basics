export async function get(url: string) {
  const response = await fetch(url)

  if(!response.ok) {
    throw new Error('Failed to fetch data.')
  }

  const data = await response.json() as unknown // zod, a TypeScript-first schema declaration and validation library.
  
  return data
}