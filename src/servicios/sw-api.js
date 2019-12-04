const baseUrl = "https://swapi.co/api/";

export function getAll() {
  return fetch(baseUrl).then(res => res.json());
}

export function getIndiceByRubro(rubro) {
  return fetch(`${baseUrl}${rubro}`).then(res => res.json());
}

export function getDetByIndice(Rubro, indice) {
  return fetch(`${baseUrl}${Rubro}${indice}`).then(res => res.json());
}
