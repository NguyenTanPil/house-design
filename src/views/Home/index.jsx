import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Categories from "../../components/Categories";
import Collection from "../../components/Collection";
import ShortChannel from "../../components/ShortChannel";
import Signature from "../../components/Signature";
import Slider from "../../components/Slider";
import MasonryImageList from "../GalleryImage";
import Breadcrumb from "../Breadcrumbs";
import IntroduceBanner from "../IntroduceBanner";
import Box from "@mui/material/Box";

const Home = () => {
    const { category } = useParams();

    useEffect(() => {
        console.log(category);
    }, [category]);

    return (
        <>
            {!category ? (
                <Box>
                    <Slider />
                    <Categories />
                    <Signature />
                    <Collection />
                    <ShortChannel />
                </Box>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Breadcrumb></Breadcrumb>
                    <MasonryImageList></MasonryImageList>
                    <Box
                        sx={{
                            borderBottom: "1px dashed #ccc",
                            height: "2px",
                            width: "65%",
                            margin: "40px 0px",
                        }}
                    ></Box>
                    <IntroduceBanner></IntroduceBanner>
                </Box>
            )}
        </>
    );
};

export default Home;
