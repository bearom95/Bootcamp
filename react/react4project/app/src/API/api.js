export const getMushrooms = async () => {
  const data = await fetch('http://localhost:8080/mushrooms');
  const dataToJson = await data.json();
  return dataToJson;
};

export const getMushroom = async (id) => {
  const data = await fetch(`http://localhost:8080/mushrooms/${id}`);
  const dataToJson = await data.json();
  return dataToJson;
};
