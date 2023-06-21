import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/bundle.js",
    output: [
      {
        file: "dist/bundle.js",
        format: "cjs",
      },
      {
        file: "dist/bundle.min.js",
        format: "cjs",
        plugins: [terser()],
      },
    ],
  },
  {
    input: "src/dark-mode-switch/dark-mode-switch.js",
    output: [
      {
        file: "dist/components/dark-mode-switch.js",
        format: "cjs",
      },
      {
        file: "dist/components/dark-mode-switch.min.js",
        format: "cjs",
        plugins: [terser()],
      },
    ],
  },
];
