import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Select,
  Box,
  Button,
  IconButton,
  InputLabel,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
const [email, setEmail] = useState();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 10,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
        <Box sx={{ marginTop: "10px" }}>
          <TextField
            type="email"
            id="email"
            label="Email Address"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
