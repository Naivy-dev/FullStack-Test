import * as api from "../api";

// export const getInfo = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetch();

//     dispatch({ type: "FETCH", payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const createInfo = (info) => async (dispatch) => {
  try {
    const { data } = await api.getNewInfo(info);

    dispatch({ type: "POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
