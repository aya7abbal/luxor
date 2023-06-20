import * as React from "react";
import "./fprojects.css";
import IMG from "../../../assets/project1.jpeg";
import IMG1 from "../../../assets/project2.jpeg";
import IMG2 from "../../../assets/project3.jpeg";
import IMG3 from "../../../assets/project4.jpeg";

// Swiper
import { SwiperSlide } from "swiper/react";
import "swiper/css";

// MATERIAL UI

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
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
];
export default function FProjCard() {
  return (
    <>
      {/* <SwiperSlide> */}
        {cardArray.map((element) => (
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
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        ))}
      {/* </SwiperSlide> */}
    </>
  );
}
