import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CrimsonButton from "./CustomButton";
import { Container } from '@mui/material';

export default function IntroduceBanner() {
    return (
        <Container
            sx={{
                mt: 5,
            }}
        >
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid xs={4}>
                    <Card>
                        <CardMedia
                            sx={{ height: 245 }}
                            image="https://decoxdesign.com/upload/banner/landscape.jpg"
                            title="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card
                        sx={{
                            maxHeight: 245,
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
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <CrimsonButton
                                        content="XEM NGAY"
                                        onClick={() => {
                                            console.log("abc");
                                        }}
                                        type={"midnightBlue"}
                                    ></CrimsonButton>
                                </div>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card
                        sx={{
                            height: 245,
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
                                    Quy trình làm việc
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ lineHeight: "22px" }}
                                >
                                    Một sản phẩm đẹp cần nhiều thời gian để thực
                                    hiện, và còn cần thêm hàng chục những bàn
                                    tay nhân sự tham gia vào quá trình xây dựng
                                    và phát triển, hãy cùng tìm hiểu nhé
                                </Typography>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "38px",
                                    }}
                                >
                                    <CrimsonButton
                                        content="XEM THÊM"
                                        onClick={() => {
                                            console.log("abc");
                                        }}
                                        type={"crimson"}
                                    ></CrimsonButton>
                                </div>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
