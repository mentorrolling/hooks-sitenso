export const getQuote = async (id) => {
  try {
    const resp = await fetch(`https://www.breakingbadapi.com/api/quotes/${id}`);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se realizó la petición");
  }
};
