import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { Box, CircularProgress, Tabs, Tab } from "@mui/material";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import "./Tab.css";

function CustomTabPanel(props) {
  const { value, index, items } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Carousel data={items} isSongsSection />}
    </div>
  );
}

CustomTabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

const CustomTab = ({ apiURL, songs }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [loader, setLoader] = useState(true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterSongsByGenre = (songs, genre) => {
    if (genre === "all") {
      return songs;
    }
    return songs.filter((song) => song.genre.key === genre);
  };

  const fetchAPIData = async () => {
    setLoader(true);
    try {
      const response = await axios.get(apiURL);
      response.data.data.unshift({ key: "all", label: "All" });
      setGenres(response.data.data);
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
    <Box sx={{ width: "100%" }}>
      {loader ? (
        <Box sx={{ textAlign: "center", color: "#ffffff" }}>
          <CircularProgress sx={{ mt: 2 }} />
          <p>Loading Genres...</p>
        </Box>
      ) : (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="songs tab"
            variant="scrollable"
            sx={{
              marginBottom: "1rem",
              "& .Mui-selected": {
                color: "#ffffff!important",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#34c94b",
              },
            }}
          >
            {genres.map((item) => {
              return (
                <Tab
                  label={item.label}
                  key={item.key}
                  sx={{ color: "#ffffff", textTransform: "none" }}
                />
              );
            })}
          </Tabs>
          {genres.map((item, idx) => {
            const filteredSongs = filterSongsByGenre(songs, item.key);
            return (
              <CustomTabPanel
                key={item.key}
                value={value}
                index={idx}
                items={filteredSongs}
              ></CustomTabPanel>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default CustomTab;
