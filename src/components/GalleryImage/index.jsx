import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PropTypes from "prop-types";

export default function MasonryImageList(props) {
    const { data } = props;
    return (
        <Box sx={{ height: "100%" }}>
            <ImageList variant="masonry" cols={4} gap={20}>
                {data?.map((item) => (
                    <ImageListItem key={item.img} sx={{ borderRadius: "12px" }}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{ borderRadius: "16px" }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

MasonryImageList.propTypes = {
    data: PropTypes.array,
};
