import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";

const CustomCard = ({ name, url, follows, likes }) => {
  return (
    <>
      <Card>
        <CardMedia sx={{ height: 170 }} image={url} title={name} />
        <CardContent sx={{ padding: "0.5rem!important" }}>
          <Chip
            label={follows ? follows + " Follows" : likes + " Likes"}
            size="small"
            sx={{ backgroundColor: "#121212", color: "#ffffff" }}
          />
        </CardContent>
      </Card>
      <Typography variant="body2" sx={{ color: "#ffffff", paddingY: "0.5rem" }}>
        {name}
      </Typography>
    </>
  );
};

export default CustomCard;
