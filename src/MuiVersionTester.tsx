import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import muiPkg from "@mui/material/package.json";

const MuiVersionTester = () => {
  console.log("Loaded @mui/material version:", muiPkg.version);

  return (
    <div style={{ padding: 20, border: "2px dashed #888", margin: 10 }}>
      <CssBaseline />
      <Typography variant="h6" gutterBottom>
        MUI Version Tester (v{muiPkg.version})
      </Typography>

      {/* Button: new color 'tertiary' only works in v7 */}
      <Button variant="contained" color="tertiary" sx={{ mr: 1 }}>
        Button tertiary
      </Button>

      {/* TextField: margin="dense" is deprecated in v7 */}
      <TextField margin="dense" label="Margin dense test" />

      {/* Typography: 'body3' only supported in v7 */}
      <Typography variant="body3">Body3 text (v7 only)</Typography>
    </div>
  );
};

export default MuiVersionTester;