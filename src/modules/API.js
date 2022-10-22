export const getList = async () => {
  const response = await fetch('https://api.openbrewerydb.org/breweries?by_type=nano&per_page=6');
  const data = await response.json();

  return data;
};

export const postAPI = async (url, dataObj) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(dataObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};

export const getAPI = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXa9GIOD94bm1hT63nt8/comments?item_id=${id}`)
    .then((res) => res.json());

  return response;
};

export const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXa9GIOD94bm1hT63nt8/likes')
    .then((res) => res.json());

  return response;
};
