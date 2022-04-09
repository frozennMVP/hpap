import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ImgGroup = () => {
  const itemData = [
    {
      img: "/assets/img/imgGroup.jpg",
    },
    {
      img: "/assets/img/imgGroupTwo.jpg",
    },
    {
      img: "/assets/img/imgGroupOne.jpg",
    },
    {
      img: "/assets/img/imgGroupThree.jpg",
    },
    {
      img: "/assets/img/imgGroupFour.jpg",
    },
    {
      img: "/assets/img/imgGroupFive.jpg",
    },
  ];

  
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto"
      }}
    >
      <ImageList
        sx={{ width: "100%", height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImgGroup;
