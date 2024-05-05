import React, { useContext } from "react";
// import {Provider} from react-redux;
// import appStore from './appStore.js'
import AppContents from "./AppContents";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./styles/mainStyles";
import AppContext, { AppProvider } from "./AppContext";

const App = () => {
  // const { data } = useData();

  // // This useEffect will ensure that loading state is set to false once data is available
  // useEffect(() => {
  //   if (data.length > 0) {
  //     setLoading(false);
  //   }
  // }, [data]);

  return (
    <ThemeProvider theme={mainTheme}>
      <AppProvider>
        <AppContents />
        {/* {data} */}
        {/* <Provider store={appStore}> */}
        {/* <AppContents /> */}
        {/* </Provider> */}
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
