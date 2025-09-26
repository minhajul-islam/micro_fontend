const mfConfig = {
  name: "break_fix",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/ManageArea",
  },
  shared: {
    react: { singleton: false },
    "react-dom": { singleton: false },
    "@mui/material": { singleton: false },
    "@emotion/react": { singleton: false },
  },
};

module.exports = { mfConfig };
