import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import './CustomModal.css'

const CustomModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Feedback
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        component="form"
        autoComplete="off"
        sx={{ marginX: "1rem" }}
      >
        <TextField
         className="custom-input"
          autoFocus
          type="text"
          margin="dense"
          id="fullName"
          label="Full Name"
          multiline
          fullWidth
        />
        <TextField
         className="custom-input"
          type="email"
          margin="dense"
          id="email"
          label="Email ID"
          multiline
          fullWidth
        />
        <TextField
         className="custom-input"
          type="text"
          margin="dense"
          id="subject"
          label="Subject"
          multiline
          fullWidth
        />
        <TextField
         className="custom-input"
          margin="dense"
          id="description"
          label="Description"
          multiline
          rows={3}
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          sx={{
            backgroundColor: "#34c94b",
            color: "#ffffff",
            textTransform: "none",
            marginBottom: "1.5rem"
          }}
          className="submitFeedback"
          type="button"
          variant="text"
          name="submitFeedback"
          onClick={onClose}
        >
          Submit Feedback
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
