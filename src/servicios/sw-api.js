const baseUrl = "https://swapi.co/api/";

export function getAll() {
  return fetch(baseUrl).then(res => res.json());
}

export function getAllByRubro(Rubro) {
  return fetch(`${baseUrl}${Rubro}`).then(res => res.json());
}
