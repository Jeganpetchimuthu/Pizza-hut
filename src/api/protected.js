// import React from "react";

// import { Route, Redirect } from "react-router-dom";

// const protectedRouter = ({ component, ...rest }) => {
//   var RenderComponents = component;
//   const hasToken = JSON.parse(localStorage.getItem("auth"));
//   console.log(hasToken);

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return hasToken !== null ? (
//           <RenderComponents {...props} />
//         ) : (
//           <Redirect to={{ pathname: "./login" }} />
//         );
//       }}
//     />
//   );
// };
// export default protectedRouter;
