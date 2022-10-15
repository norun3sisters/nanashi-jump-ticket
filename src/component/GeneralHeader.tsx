import { AppBar, Box, ButtonBase, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import headerBackground from "../image/generalHeaderBar.png";
import { resetQuestion } from "../redux/qstateModule";

export default function GeneralHeader() {
  const dispatch = useDispatch();

  const clickRestart = () => {
    dispatch(resetQuestion());
  };

  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="primary"
          sx={{
            backgroundImage: `url(${headerBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Toolbar>
            <ButtonBase onClick={() => clickRestart()}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1 }}
                fontWeight="bold"
              >
                ななしふぇす2022"JUMP!"チケット診断
              </Typography>
            </ButtonBase>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
