const getApiData = async (url) => {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export { getApiData };