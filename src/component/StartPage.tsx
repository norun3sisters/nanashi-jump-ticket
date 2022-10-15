import { Box, Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useDispatch } from "react-redux";
import { startQuestion } from "../redux/qstateModule";
import cardImage from "../image/qrcode.png";
import Caution from "./Caution";

export default function StartPage() {
  const dispatch = useDispatch();

  const clickStart = () => {
    dispatch(startQuestion());
  };

  return (
    <div style={{ width: "100%" }}>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Box sx={{ m: 3 }} />
        <Button
          size="large"
          color="success"
          variant="contained"
          onClick={() => clickStart()}
        >
          診断をはじめる
        </Button>
        <Box sx={{ m: 3 }} />
        <Stack spacing={0} justifyContent="center" alignItems="center">
          <Typography variant="caption">このページを共有する</Typography>
          <Card sx={{ maxWidth: "140px" }}>
            <CardMedia
              component="img"
              height="140px"
              src={cardImage}
              alt="qrcode"
            />
          </Card>
          <Typography variant="caption">
            https://norun3sisters.github.io/nanashi-jump-ticket/
          </Typography>
        </Stack>
        <Caution />
      </Stack>
    </div>
  );
}
