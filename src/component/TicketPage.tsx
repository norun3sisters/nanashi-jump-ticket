import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTicketData } from "../logic/Logic";
import { RootState } from "../redux/rootReducer";
import cardImage from "../image/ticketImage.jpg";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { resetQuestion } from "../redux/qstateModule";
import Caution from "./Caution";

export default function TicketPage() {
  const dispatch = useDispatch();
  const qstate = useSelector((state: RootState) => {
    return state.qstate.qstate;
  });

  const ticket = useMemo(() => GetTicketData(qstate), [qstate]);

  const clickRestart = () => {
    dispatch(resetQuestion());
  };

  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={8} />
        <Grid item xs={8}>
          <Typography align="left" alignItems="center" variant="h4">
            あなたにおすすめするチケットは．．．
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: "480x" }}>
            <CardActionArea
              target="_blank"
              rel="noreferrer"
              href={ticket.ticketPage}
            >
              <div style={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="250"
                  src={cardImage}
                  alt="ticket"
                />
                <div
                  style={{
                    position: "absolute",
                    color: "black",
                    top: "40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {ticket.name}
                  </Typography>
                </div>
              </div>
              <CardContent>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={8}>
                    <Typography variant="h6" align="left">
                      {ticket.status}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2" align="right" fontWeight="bold">
                      販売価格：{ticket.cost}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" sx={{ textTransform: "none" }}>
                <Link target="_blank" rel="noreferrer" href={ticket.ticketPage}>
                  【配信チケット販売サイト】{ticket.ticketPage}
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={8}>
          <Caution />
        </Grid>
        <Grid item xs={8}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => clickRestart()}
          >
            <RestartAltIcon fontSize="large" />
            <Typography variant="h4">もう一度最初から診断</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
