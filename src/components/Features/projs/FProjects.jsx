import * as React from "react";
import "./fprojects.css";
// import FProjCard from "./FProjCard";
import IMG from "../../../assets/project1.jpeg";
import IMG1 from "../../../assets/project2.jpeg";
import IMG2 from "../../../assets/project3.jpeg";
import IMG3 from "../../../assets/project4.jpeg";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation, Grid } from "swiper";

export default function FProjects() {
  const cardArray = [
    {
      title: "Project 1",
      img: IMG,
      text: "  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: "Project 2",
      img: IMG1,
      text: "  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: "Project 3",
      img: IMG2,
      text: "  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: "Project 4",
      img: IMG3,
      text: "  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: "Project 5",
      img: IMG1,
      text: "  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: "Project 6",
      img: IMG2,
      text: "  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      title: "Project 7",
      img: IMG3,
      text: "  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ];

  return (
    <>
      <Swiper
      
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        //   slidesPerView={2}
        //   spaceBetween={30}
        //   grid={{
        //     rows: 2,
        //   }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, Grid]}
        className="mySwiper"
         style={{
  "--swiper-pagination-color": "#55b0e8",
  "--swiper-pagination-bullet-inactive-color": "white",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
}}>
      >
        {cardArray.map((element) => (
          <SwiperSlide>
            <Card className="proj-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={element.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {element.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
              <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Share
                </Button>
                
              </CardActions> */}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
