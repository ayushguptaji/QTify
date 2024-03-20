import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
//import "./FAQs.css";

const FAQs = ({ title, apiURL }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchAPIData = async () => {
    setLoader(true);
    try {
      const response = await axios.get(apiURL);
      setItems(response.data.data);
      setLoader(false);
      return response.data.data;
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
    <>
      <Box sx={{ margin: "1rem" }}>
        {loader ? (
          <Box sx={{ textAlign: "center", color: "#ffffff" }}>
            <CircularProgress sx={{ mt: 2 }} />
            <p>Loading {title}...</p>
          </Box>
        ) : (
          <Stack spacing={2}>
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", textAlign: "center", paddingY: "1rem" }}
            >
              FAQs
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {items.map((item, idx) => {
                return (
                  <Accordion
                    key={idx}
                    defaultExpanded={idx === 0}
                    sx={{
                      width: "78.81%",
                      border: "solid 1px #ffffff",
                      borderRadius: "10px!important",
                      "@media (max-width: 600px)": {
                        width: "95%",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{ color: "#34c94b", fontSize: "2rem" }}
                        />
                      }
                      aria-controls={"panel" + { idx } + "-content"}
                      id={"panel" + { idx } + "-header"}
                      sx={{
                        backgroundColor: "#212121",
                        color: "#ffffff",
                        border: "solid 1px #ffffff",
                        borderRadius: "10px",
                      }}
                    >
                      {item.question}
                    </AccordionSummary>
                    <AccordionDetails>{item.answer}</AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default FAQs;
