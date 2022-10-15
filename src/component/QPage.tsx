import * as React from "react";
import Stack from "@mui/material/Stack";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { QAnswer } from "../type/QType";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { backQuestion, setAnswer, testAction } from "../redux/qstateModule";
import { useMemo } from "react";
import { GetQuestion } from "../logic/Logic";
import headerBackground from "../image/pageHeadBar.png";

export default function QPage() {
  const dispatch = useDispatch();
  const qstate = useSelector((state: RootState) => {
    return state.qstate.qstate;
  });

  const qquestion = useMemo(() => {
    return GetQuestion(qstate);
  }, [qstate]);

  const disabledBack = useMemo(() => qstate.current === 0, [qstate]);

  const handleBack = () => {
    dispatch(backQuestion());
  };

  const handleSubmitAnswer = (qanswer: QAnswer) => {
    dispatch(setAnswer(qanswer.code));
  };

  const handleForward = () => {
    dispatch(testAction());
  };

  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="transparent"
          sx={{
            backgroundImage: `url(${headerBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Toolbar>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={1}>
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={() => handleBack()}
                  disabled={disabledBack}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
              </Grid>
              <Grid item xs={6}>
                <Typography align="center" alignItems="center" variant="h5">
                  {qquestion.question}
                </Typography>
                <Typography align="center" alignItems="center" variant="body2">
                  {qquestion.detail}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={() => handleForward()}
                  disabled
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Divider sx={{ borderBottomWidth: "3px", bgcolor: "lightblue" }} />
      <Box sx={{ m: 3 }} />
      <Stack spacing={2} justifyContent="center" alignItems="center">
        {qquestion.answers.map((qanswer: QAnswer) => (
          <Button
            key={qanswer.code}
            variant="outlined"
            size="large"
            color="primary"
            disabled={!qanswer.enabled}
            onClick={() => handleSubmitAnswer(qanswer)}
            sx={{ minWidth: "480px" }}
          >
            <Typography fontWeight="bold">{qanswer.answer}</Typography>
          </Button>
        ))}
      </Stack>
    </div>
  );
}
