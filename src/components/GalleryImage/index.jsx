import { Container } from "@mui/material";
import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PropTypes from "prop-types";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function MasonryImageList(props) {
    const { data } = props;
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;

        const delegate = "[data-fancybox]";
        const options =
            {
                Carousel: {
                    infinite: true,
                    transition: "slide",
                },
                Toolbar: {
                    display: {
                        left: ["infobar"],
                        middle: [
                            "zoomIn",
                            "zoomOut",
                            "toggle1to1",
                            "rotateCCW",
                            "rotateCW",
                            "flipX",
                            "flipY",
                        ],
                        right: ["slideshow", "thumbs", "close"],
                    },
                    enabled: true
                },
                Images: {
                    zoom: false,
                  },
                showClass: "f-fadeIn",
                
            } || {};

        Fancybox.bind(container, delegate, options);

        return () => {
            Fancybox.unbind(container);
            Fancybox.close();
        };
    });

    return (
        <Container sx={{ mt: 6 }}>
            <Box>
                <ImageList
                    variant="masonry"
                    cols={4}
                    gap={12}
                    sx={{
                        columnCount: {
                            xs: "2 !important",
                            sm: "3 !important",
                            md: "4 !important",
                        },
                    }}
                    ref={containerRef}
                >
                    {data?.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                data-fancybox="gallery"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}

MasonryImageList.propTypes = {
    data: PropTypes.array,
};
