import { Box, Container, Grid } from "@mui/material";
import { introduceTeam } from "../../mockData";

export default function IntroduceCompany() {
    return (
        <div>
            <Container
                sx={{
                    mt: 5,
                    display: "flex",
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-end",
                            height: "100%",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "26px",
                                color: "#8b5b19",
                                margin: "0px",
                            }}
                        >
                            Chúng tôi là
                        </p>
                        <p
                            style={{
                                fontSize: "42px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                color: "#264c5d",
                                fontFamily: `"PoppinsVN", sans-serif`,
                                margin: 0,
                            }}
                        >
                            DECOX
                        </p>
                    </div>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <p
                        style={{
                            fontFamily:
                                "Helvetica Neue, Helvetica, Arial, sans-serif",
                            fontSize: "14px",
                        }}
                    >
                        Decox là đơn vị thiết kế thi công kiến trúc nội thất cao
                        cấp hàng đầu tại Việt Nam. Được thành lập từ năm 2013,
                        tính đến nay Decox đã có 10 năm kinh nghiệm trong lĩnh
                        vực thiết kế nội thất - kiến trúc và xây dựng với đội
                        ngũ hơn 50 nhân viên khối văn phòng.
                    </p>
                    <p
                        style={{
                            fontFamily:
                                "Helvetica Neue, Helvetica, Arial, sans-serif",
                            fontSize: "14px",
                        }}
                    >
                        Với phương châm chất lượng sản phẩm đặt lên trên hàng
                        đầu, Decox luôn lắng nghe những phản hồi từ khách hàng
                        từ đó cải thiện, nâng cao quy trình hoạt động, củng cố
                        bộ máy làm việc để mang đến một quy trình đơn giản nhưng
                        khép kín, đảm bảo chất lượng đầu ra tốt nhất đi từ thiết
                        kế - thi công - sản xuất - lắp đặt - hoàn thiện nội thất
                        và bàn giao công trình.
                    </p>
                    <p
                        style={{
                            fontFamily:
                                "Helvetica Neue, Helvetica, Arial, sans-serif",
                            fontSize: "14px",
                        }}
                    >
                        Để thực hiện được điều đó, không thể không kể đến tầm
                        quan trọng của đội ngũ nhân sự tại Decox, đặc biệt là
                        những người Kiến trúc sư, suốt 10 năm qua, họ luôn đặt
                        niềm đam mê với nghề và sự tập trung vào từng dự án,
                        hướng tới mục tiêu tìm kiếm giá trị trong không gian
                        sống cho những khách hàng thượng lưu tại Việt Nam.
                    </p>
                </Box>
            </Container>

            <Box
                sx={{
                    backgroundColor: "#18181b",
                    // height: "700px",
                    padding: "30px 0px 100px 0px",
                }}
            >
                <Container
                    sx={{
                        mt: 5,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        style={{
                            color: "#fff",
                            fontSize: "28px",
                            fontFamily: `'PoppinsVN', sans-serif`,
                            marginBottom: "50px",
                            lineHeight: "38px",
                            textTransform: "uppercase",
                            marginLeft: "-32px",
                        }}
                    >
                        MEET{" "}
                        <span style={{ fontWeight: "bold" }}>OUT TEAM</span>
                    </Box>
                    <Grid container spacing={4} rowSpacing={3}>
                        {introduceTeam.map((item) => {
                            return item.img ? (
                                <Grid md={2.4} sm={6} xs={12}>
                                    <img
                                        src={item.img}
                                        style={{
                                            borderRadius: "10px",
                                            width: "230px",
                                        }}
                                    ></img>
                                </Grid>
                            ) : (
                                <Grid md={2.4} sm={6} xs={12}>
                                    <div
                                        style={{
                                            height: "330px",
                                            borderRadius: "16px",
                                            background: "#222",
                                            width: "230px",
                                            fontSize: "18px",
                                            color: "#fff",
                                            padding: "20px 0 0 20px",
                                            boxSizing: "border-box",
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </Box>

            <Box>
                <img src="https://decoxdesign.com/images/10-nam.png" />
            </Box>

            <Container
                sx={{
                    mt: 5,
                    display: "flex",
                }}
            >
                <Box
                    style={{
                        fontFamily: `'PoppinsVN', sans-serif`,
                        fontSize: "24px",
                        color: "#264c5d",
                    }}
                >
                    {" "}
                    NHỮNG CỘT MỐC{" "}
                    <span style={{ fontWeight: "bold" }}>QUAN TRONG</span>
                    <p style={{ fontWeight: "bold", margin: 0 }}>
                        TRÊN CON ĐƯỜNG PHÁT TRIỂN CỦA DECOX
                    </p>
                </Box>
            </Container>

            <Box style={{ height: "500px", backgroundColor: "#18181b" }}></Box>

            <Container
                sx={{
                    mt: 5,
                    display: "flex",
                }}
            >
                <Grid container spacing={4} rowSpacing={3}>
                    <Grid md={6} sm={6} xs={12}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                                width: "85%",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "28px",
                                    fontFamily: "'PoppinsVN', sans-serif",
                                    color: "#8b5b19",
                                    fontWeight: "bold",
                                }}
                            >
                                TẦM NHÌN, SỨ MỆNH{" "}
                                <p style={{ margin: "0" }}>& GIÁ TRỊ CỐT LÕI</p>
                            </div>
                            <img src="https://decoxdesign.com/images/we-think.png" />
                            <img src="https://decoxdesign.com/images/we-make.png" />
                        </Box>
                    </Grid>

                    <Grid md={6} sm={6} xs={12}>
                        <Box>
                            <span
                                style={{
                                    marginBottom: "10px",
                                    color: "#8b5b19",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                }}
                            >
                                TẦM NHÌN
                            </span>
                            <p style={{ color: "#666", fontSize: "15px" }}>
                                Mang đến những sản phẩm thiết kế kiến trúc - nội
                                thất, xây dựng thật ấn tượng với tiêu chuẩn chất
                                lượng cao nhất. Và chúng tôi luôn không ngừng nỗ
                                lực vì sự thành công đó.
                            </p>
                        </Box>
                        <Box
                            sx={{
                                fontSize: "15px",
                                color: "#666",
                                paddingBottom: "32px",
                            }}
                        >
                            <span
                                style={{
                                    marginBottom: "10px",
                                    color: "#8b5b19",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                }}
                            >
                                SỨ MỆNH
                            </span>
                            <p style={{ margin: "6px 0" }}>
                                Từ những ngày đầu tiên đến nay, Decox vẫn kiên
                                trì theo đuổi 1 con đường duy nhất:
                            </p>
                            <p style={{ margin: "6px 0" }}>
                                <b>WE THINK - Suy nghĩ</b>: Mỗi công trình và
                                sản phẩm tại Decox đều bắt nguồn từ sự suy ngẫm
                                để tạo ra những ý tưởng và một câu chuyện xuyên
                                suốt quá trình thực hiện
                            </p>
                            <p style={{ margin: "6px 0" }}>
                                <b>WE DESIGN - Sáng tạo</b>: Từ những ý tưởng
                                đó, các nhà thiết kế sẽ bắt đầu quá trình làm
                                cho chúng hình thành một cách chuẩn mực, khoa
                                học và trở nên thực tế hơn.
                            </p>
                            <p style={{ margin: "6px 0" }}>
                                <b>WE MADE - Thực thi:</b>: Decox luôn kiểm soát
                                chặt chẽ quy trình sản xuất từ tỷ lệ, chất liệu,
                                màu sắc,... trong từng chi tiết để đảm bảo tính
                                chính xác từ thiết kế đến công trình thực tế.
                            </p>
                            <p style={{ margin: "6px 0" }}>
                                Decox luôn đặt mục tiêu chất lượng lên hàng đầu
                                bao gồm chất lượng sản phẩm, kỹ thuật và thi
                                công hoàn thiện và chất lượng dịch vụ sau bán
                                hàng như bảo hành, bảo trì.
                            </p>
                        </Box>
                        <Box sx={{ maxWidth: "100%" }}>
                            <img src="https://decoxdesign.com/images/we-design.png" style={{width : '595px'}}/>
                        </Box>
                        <Box
                            style={{
                                background: "#eff0f0",
                                padding: "25px",
                                borderRadius: "15px",
                                marginTop: "32px",
                            }}
                        >
                            <span
                                style={{
                                    marginBottom: "10px",
                                    color: "#8b5b19",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                }}
                            >
                                CHÍNH TRỰC - HIỆU QUẢ{" "}
                                <p style={{ margin: 0 }}>& CHUYÊN NGHIỆP</p>
                            </span>
                            <div
                                style={{
                                    fontSize: "15px",
                                    color: "#666",
                                    paddingBottom: "32px",
                                }}
                            >
                                <p>
                                    Không chỉ đặt chất lượng lên hàng đầu, giá
                                    trị cốt lõi mà Decox muốn mang đến cho khách
                                    hàng đó chính là sự hài lòng về sản phẩm,
                                    dịch vụ trong suốt quá trình đồng hành xây
                                    dựng tổ ấm.
                                </p>
                                <p>
                                    • <b>CHÍNH TRỰC</b>, tận tâm với khách hàng,
                                    đặt lợi ích của khách hàng lên hàng đầu
                                </p>
                                <p>
                                    • Quy trình làm việc <b>HIỆU QUẢ</b>, tối ưu
                                    thời gian, chi phí nhưng vẫn đảm bảo chất
                                    lượng đầu ra
                                </p>
                                <p>
                                    • Đội ngũ nhân viên <b>CHUYÊN NGHIỆP</b>, đủ
                                    tài đủ sức để tiếp nhận và hoàn thành công
                                    việc đúng tiến độ và đáp lại sự tin tưởng mà
                                    khách hàng đã trao gửi.
                                </p>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container
                sx={{
                    mt: 5,
                    display: "flex",
                }}
            >
                <Grid container spacing={4} rowSpacing={3}>
                    <Grid md={6} sm={6} xs={12}>
                        <Box style={{ marginBottom: "30px" }}>
                            <span
                                style={{
                                    color: "#8b5b19",
                                    fontSize: "28px",
                                    fontWeight: 500,
                                }}
                            >
                                LỜI NGỎ TỪ <b>DECOX</b>
                            </span>
                        </Box>
                        <img
                            src="https://decoxdesign.com/images/loi-ngo.jpg"
                            style={{ width: "505px", height: "360px" }}
                        />
                    </Grid>
                    <Grid md={6} sm={6} xs={12}>
                        <Box
                            style={{
                                paddingTop: "48px",
                                fontSize: "15px",
                                color: "#666",
                            }}
                        >
                            <p>
                                ”Theo cùng sự nâng cấp về đời sống vật chất lẫn
                                tinh thần, thì một ngôi nhà với kiến trúc ấn
                                tượng, nội thất cao cấp chính là sự đầu tư của
                                khách hàng trong tương lai. Thế nên việc chọn 1
                                công ty có chiều sâu về kinh nghiệm và tri thức
                                để đồng hành trong quá trình xây dựng luôn là
                                điều mà khách hàng cần.
                            </p>

                            <p>
                                Hiểu được điều này, Decox luôn nỗ lực trau dồi
                                và thay đổi theo từng ngày để mang đến một quy
                                trình làm việc khép kín, hiệu quả tối ưu về chất
                                lượng, thời gian và chi phí.”
                            </p>

                            <p>
                                <b>Ông Cao Hưng</b> - CEO Decox chia sẻ
                            </p>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
