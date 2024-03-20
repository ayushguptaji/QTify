import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Tooltip,
} from "@mui/material";

const CustomCard = ({ name, url, follows, likes, songsLength }) => {
  return (
    <>
      <Tooltip
        title={songsLength > 0 ? songsLength + " Songs" : name}
        placement="top"
        arrow
      >
        <div>
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
          <Typography
            variant="body2"
            sx={{ color: "#ffffff", paddingY: "0.5rem" }}
          >
            {name}
          </Typography>
        </div>
      </Tooltip>
    </>
  );
};

export default CustomCard;
