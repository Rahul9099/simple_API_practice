
const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

export const getJSON = async (url) => {
  try {
    const res = await Promise.race([fetch(url),timeout(10)]);
    const dataRecipe = await res.json();
    if (!res.ok) {
      throw new Error(`${dataRecipe.message} (${res.status})`);
    }
    return dataRecipe;
  } catch (error) {
    throw error;
  }
};
