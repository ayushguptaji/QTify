import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Box, Button, Grid, Typography, CircularProgress } from "@mui/material";
import "./Section.css";
import CustomCard from "../Custom Components/CustomCard";
import axios from "axios";

const Section = ({ title, handler, apiURL }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchAPIData = async () => {
    setLoader(true);
    try {
      const response = await axios.get(apiURL);
      setItems(response.data);
      setLoader(false);
      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 500) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
        setLoader(false);
        return null;
      } else {
        enqueueSnackbar(
          "Could not fetch products. Check that the backend is running, reachable and returns valid JSON.",
          {
            variant: "error",
          }
        );
        setLoader(false);
      }
    }
  };
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      fetchAPIData();
    }

    return () => {
      isMount = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box sx={{ margin: "1rem" }}>
      {loader ? (
        <Box sx={{ textAlign: "center", color: "#ffffff" }}>
          <CircularProgress sx={{ mt: 2 }} />
          <p>Loading {title}...</p>
        </Box>
      ) : (
        <>
          <Box className="section">
            <Typography variant="body2" className="section-heading">
              {title}
            </Typography>
            <Button
              sx={{
                color: "#34c94b",
                textTransform: "none",
              }}
              type="button"
              variant="text"
              name="collapse"
              onclick={handler}
            >
              Collapse
            </Button>
          </Box>
          <Grid container rowSpacing={2} columnSpacing={2}>
            {items.map((item) => {
              return (
                <Grid item xs={6} sm={4} md={1.7} key={item.id}>
                  <CustomCard
                    name={item.title}
                    url={item.image}
                    follows={item.follows}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Section;
