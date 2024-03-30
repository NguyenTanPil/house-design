import { Container, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import MasonryImageList from "../../components/GalleryImage";
import { galleryDataSource } from "../../mockData";

export default function Category() {
    const { category } = useParams();
    const getCategory = () => {
        switch (category) {
            case "mau-nha-dep":
                return 'BeautyHouse';
            case "phong-khach":
                return 'LivingRoom';
            case "phong-bep":
                return 'KitchenRoom';
            case "phong-ngu":
                return 'BathRoom';
            case "ban-cong":
                return 'BanCong';
            default:
                return null;
        }
    };
    return (
        <Container
            sx={{
                mt: 3,
            }}
        >
            <MasonryImageList data={galleryDataSource?.[`${getCategory()}`]} />
            <Box
                sx={{
                    borderBottom: "1px dashed #ccc",
                    height: "2px",
                    margin: "44px 0px 20px 0",
                }}
            ></Box>
        </Container>
    );
}
