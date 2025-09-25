const mfConfig = {
  name: "break_fix",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/ManageArea",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^19.0.0" },
    "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
  },
};

module.exports = { mfConfig };
