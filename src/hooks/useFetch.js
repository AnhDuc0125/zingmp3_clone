// import { useEffect, useReducer } from "react";
// import request from "~/requests";

// const useFetch = ({path, reducer, initialState = {}}) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await request.get(path);
//       return response.data;
//     };

//     const getData = function (res, sectionId, sectionType) {
//       return res?.data?.items?.find(
//         (item) =>
//           (sectionId ? item.sectionId === sectionId : true) && item.sectionType === sectionType
//       );
//     };

//     fetchData().then((res) => {
//       dispatch({
//         type: ADD_ALL,
//         payload,
//       });
//     });
//   }, []);

//   return state
// }
