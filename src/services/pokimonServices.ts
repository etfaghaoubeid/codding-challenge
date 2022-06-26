import { BASE_URL } from "../config/apiUrls";
import { Pokimon } from "../types";
async function getPokimonByUrl(url: string): Promise<Pokimon> {
  const res = await fetch(url);
  const pokimon = await res.json();
  return pokimon;
}
export async function getPokimonByName(name: string): Promise<Pokimon> {
  const res = await fetch(`${BASE_URL}/${name}`);
  const pokimon = await res.json();

  return pokimon;
}
async function getPokimonList(): Promise<Pokimon[]> {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  console.log("data, ", data);
  const pokimonList: Pokimon[] = [];
  for (const listItem of data.results) {
    const pokimon = await getPokimonByUrl(listItem.url);
    pokimonList.push(pokimon);
  }
  return pokimonList;
}
export { getPokimonList };
