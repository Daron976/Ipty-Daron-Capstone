export const getList = async () => {
  const response = await fetch('https://api.openbrewerydb.org/breweries?by_type=nano&per_page=6');
  const data = await response.json();

  return data;
};

export const postComment = async (url, dataObj) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(dataObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};

export const getComment = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeiwNxFf2zcjWHsPu3w9/comments?item_id=${id}`)
    .then((res) => res.json());

  return response;
};
