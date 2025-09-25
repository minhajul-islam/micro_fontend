export const mfConfig = {
  name: "break_fix",
  filename: "remoteEntry.js",
  exposes: {
    "./Area": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^19.0.0" },
    "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
  },
};
