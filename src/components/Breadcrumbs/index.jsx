import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const getTextTranslateBreadcrumb = (str) => {
    switch (str) {
        case "mau-nha-dep":
            return "Mẫu Nhà Đẹp";
        case "phong-khach":
            return "Phòng Khách";
            case "phong-bep":
                return 'Phòng Bếp';
            case "phong-ngu":
                return 'Phòng Ngủ';
            case "ban-cong":
                return 'Ban Công';
        default:
            return "";
    }
};

export default function Breadcrumb() {
    const { category } = useParams();

    return (
        <div
            style={{
                backgroundColor: "#f7f7f7",
                width: "60%",
                padding: "8px 0px 8px 4px",
                border: "1px solid #ececec",
                boxSizing: "content-box",
            }}
        >
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "#000",
                        }}
                        href="/"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Typography
                        sx={{ display: "flex", alignItems: "center" }}
                        color="text.primary"
                    >
                        {getTextTranslateBreadcrumb(category)}
                    </Typography>
                    {/* <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          {category}
        </Link> */}
                </Breadcrumbs>
            </div>
        </div>
    );
}
