import { Typography, Link } from "@mui/material";
import { Stack } from "@mui/system";

export default function Caution() {
  return (
    <div>
      <Stack spacing={0}>
        <Typography variant="body2">※注意事項</Typography>
        <Typography variant="caption">
          ・こちらの診断は、ファンメイドになります。お遊び感覚でご利用ください。
        </Typography>
        <Typography variant="caption">
          ・こちらの情報は、2022年10月14日時点の情報です。
        </Typography>
        <Typography variant="caption">
          ・正確な情報は是非公式サイトを御覧ください
        </Typography>
        <Typography variant="caption">
          【特設サイト】
          <Link target="_blank" rel="noreferrer" href="https://774fes.com/">
            https://774fes.com/
          </Link>
        </Typography>
        <Typography variant="caption">
          【配信チケット販売サイト】
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://virtual.spwn.jp/events/221203-774fes-lv"
          >
            https://virtual.spwn.jp/events/221203-774fes-lv
          </Link>
        </Typography>
      </Stack>
    </div>
  );
}
