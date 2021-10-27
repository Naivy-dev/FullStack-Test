export default (infos = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "POST":
      return [...infos, action.payload];
    default:
      return infos;
  }
};
