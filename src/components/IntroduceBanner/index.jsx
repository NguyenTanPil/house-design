import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function IntroduceBanner() {
    return (
        <div style={{ width: "65%" }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid xs={4}>
                    <Card>
                        <CardMedia
                            sx={{ height: 240 }}
                            image="https://decoxdesign.com/upload/banner/landscape.jpg"
                            title="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card
                        sx={{
                            maxHeight: 240,
                            boxShadow: "0px 0px 3px 1px rgba(0,0,0,.16)",
                        }}
                    >
                        {/* <CardHeader title="Về Decox" /> */}
                        <CardContent>
                            <Stack spacing={2}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "#264c5d",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Về Decox
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ lineHeight: "22px" }}
                                >
                                    10 năm kinh nghiệm trong lĩnh vực thiết kế
                                    kiến trúc nội thất tại Việt Nam, Decox mang
                                    đến những giá trị sống mới, chuẩn mực mới,
                                    hãy để chúng tôi mang đến giá trị tinh thần
                                    và sự bền vững cho cuộc sống của bạn. Tìm
                                    hiểu về Decox tại đây
                                </Typography>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="outlined">XEM NGAY</Button>
                                </div>
                            </Stack>
                        </CardContent>
                        {/* <CardActions disableSpacing>
                            <Button variant="outlined">Outlined</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Box>333</Box>
                </Grid>
            </Grid>
        </div>
    );
}
