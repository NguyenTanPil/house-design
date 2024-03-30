import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function MasonryImageList() {
  
  return (
    <Box sx={{ width: '65%', height: '100%'}}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-08.jpg',
    title: 'Bed',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-09.jpg',
    title: 'Books',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-10.jpg',
    title: 'Sink',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-11.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-05.jpg',
    title: 'Blinds',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-06.jpg',
    title: 'Chairs',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-07.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-01.jpg',
    title: 'Doors',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-02.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-03.jpg',
    title: 'Storage',
  },
  {
    img: 'https://decoxdesign.com/upload/images/the-opera-180m2-phong-ngu-04.jpg',
    title: 'Candle',
  },
  {
    img: 'https://decoxdesign.com/upload/images/deluxe-townhouse-phong-ngu-master-08-decox.jpg',
    title: 'Coffee table',
  },
  {
    img: 'https://decoxdesign.com/upload/images/deluxe-townhouse-phong-ngu-master-09-decox.jpg',
    title: 'a',
  },
  {
    img: 'https://decoxdesign.com/upload/images/deluxe-townhouse-phong-ngu-master-10-decox.jpg',
    title: 'b',
  },
  {
    img: 'https://decoxdesign.com/upload/images/deluxe-townhouse-phong-ngu-master-07-decox.jpg',
    title: 'C',
  },
  {
    img: 'https://decoxdesign.com/upload/images/deluxe-townhouse-phong-ngu-master-02-decox.jpg',
    title: 'Cof',
  },
  {
    img: 'https://decoxdesign.com/upload/images/deluxe-townhouse-phong-ngu-master-05-decox.jpg',
    title: 'Coffs',
  },
  {
    img: 'https://decoxdesign.com/upload/images/deluxe-townhouse-phong-ngu-master-06-decox.jpg',
    title: 'Coffa',
  },
  {
    img: 'https://decoxdesign.com/upload/images/deluxe-townhouse-phong-ngu-master-01-decox.jpg',
    title: 'Coff2',
  },
  {
    img: 'https://decoxdesign.com/upload/images/thi-cong-binh-tan-townhouse-phong-ngu-01-decox.jpg',
    title: 'Coffg',
  },
  {
    img: 'https://decoxdesign.com/upload/images/thi-cong-binh-tan-townhouse-phong-ngu-02-decox.jpg',
    title: 'Coffas',
  },
  {
    img: 'https://decoxdesign.com/upload/images/thi-cong-binh-tan-townhouse-phong-ngu-master-26-decox.jpg',
    title: 'Coffki',
  },
];