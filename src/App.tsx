import "./App.css";
import QPage from "./component/QPage";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import GeneralHeader from "./component/GeneralHeader";
import { useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
import { useMemo } from "react";
import TicketPage from "./component/TicketPage";
import StartPage from "./component/StartPage";

const qaTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const qstate = useSelector((state: RootState) => {
    return state.qstate.qstate;
  });

  const start = useMemo(() => qstate.current === -1, [qstate]);
  const result = useMemo(() => qstate.current === 999, [qstate]);

  return (
    <ThemeProvider theme={qaTheme}>
      <CssBaseline />
      <GeneralHeader />
      {start && <StartPage />}
      {result && <TicketPage />}
      {!start && !result && <QPage />}
    </ThemeProvider>
  );
}

export default App;
