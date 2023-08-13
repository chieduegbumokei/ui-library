// vite.config.ts
import { resolve } from "node:path";
import react from "file:///Users/chieduegbumokei/Projects/ui-library/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/chieduegbumokei/Projects/ui-library/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/chieduegbumokei/Projects/ui-library/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///Users/chieduegbumokei/Projects/ui-library/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///Users/chieduegbumokei/Projects/ui-library/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var peerDependencies = {
  react: "^18.2.0",
  "react-dom": "^18.2.0",
  "styled-components": "^6.0.7"
};

// vite.config.ts
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    }),
    dts({
      include: ["src/components/"]
    })
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "CJEUILibrary",
      formats: ["es", "umd"],
      fileName: (format) => `cje-ui-library.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2NoaWVkdWVnYnVtb2tlaS9Qcm9qZWN0cy91aS1saWJyYXJ5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hpZWR1ZWdidW1va2VpL1Byb2plY3RzL3VpLWxpYnJhcnkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoaWVkdWVnYnVtb2tlaS9Qcm9qZWN0cy91aS1saWJyYXJ5L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcblxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IEVzTGludCBmcm9tICd2aXRlLXBsdWdpbi1saW50ZXInXG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuY29uc3QgeyBFc0xpbnRlciwgbGludGVyUGx1Z2luIH0gPSBFc0xpbnRcbmltcG9ydCAqIGFzIHBhY2thZ2VKc29uIGZyb20gJy4vcGFja2FnZS5qc29uJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChjb25maWdFbnYpID0+ICh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRzQ29uZmlnUGF0aHMoKSxcbiAgICBsaW50ZXJQbHVnaW4oe1xuICAgICAgaW5jbHVkZTogWycuL3NyY30vKiovKi57dHMsdHN4fSddLFxuICAgICAgbGludGVyczogW25ldyBFc0xpbnRlcih7IGNvbmZpZ0VudiB9KV0sXG4gICAgfSksXG4gICAgZHRzKHtcbiAgICAgIGluY2x1ZGU6IFsnc3JjL2NvbXBvbmVudHMvJ10sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZSgnc3JjJywgJ2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnQ0pFVUlMaWJyYXJ5JyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGNqZS11aS1saWJyYXJ5LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBhY2thZ2VKc29uLnBlZXJEZXBlbmRlbmNpZXMpXSxcbiAgICB9LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBzZXR1cEZpbGVzOiAnc3JjL3NldHVwVGVzdHMudHMnLFxuICB9LFxufSkpXG4iLCAie1xuICBcIm5hbWVcIjogXCJjamUtdWktbGlicmFyeVwiLFxuICBcInByaXZhdGVcIjogZmFsc2UsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcIm1haW5cIjogXCIuL2Rpc3QvY2plLXVpLWxpYnJhcnkudW1kLmpzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L2NqZS11aS1saWJyYXJ5LmVzLmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxuICAgIFwiYnVpbGRcIjogXCJ0c2MgJiYgdml0ZSBidWlsZFwiLFxuICAgIFwiZXNsaW50XCI6IFwiZXNsaW50ICdzcmMvKiovKi57anMsanN4LHRzLHRzeH0nXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50ICdzcmMvKiovKi57anMsanN4LHRzLHRzeH0nXCIsXG4gICAgXCJsaW50OmZpeFwiOiBcImVzbGludCAtLWZpeCAnc3JjLyoqLyoue2pzeCx0cyx0c3h9J1wiLFxuICAgIFwiZm9ybWF0XCI6IFwicHJldHRpZXIgLS13cml0ZSBzcmMvLyoqLyoue3RzLHRzeH0gLS1jb25maWcgLi8ucHJldHRpZXJyY1wiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGxcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcbiAgICBcInN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBkZXYgLXAgNjAwNlwiLFxuICAgIFwiYnVpbGQtc3Rvcnlib29rXCI6IFwic3Rvcnlib29rIGJ1aWxkXCIsXG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0XCJcbiAgfSxcbiAgXCJodXNreVwiOiB7XG4gICAgXCJob29rc1wiOiB7XG4gICAgICBcInByZS1jb21taXRcIjogXCJsaW50LXN0YWdlZFwiXG4gICAgfVxuICB9LFxuICBcImxpbnQtc3RhZ2VkXCI6IHtcbiAgICBcInNyYy8qKi8qLntqcyxqc3gsdHMsdHN4fVwiOiBbXG4gICAgICBcIm5wbSBydW4gZXNsaW50XCIsXG4gICAgICBcIm5wbSBydW4gZm9ybWF0XCJcbiAgICBdXG4gIH0sXG4gIFwiZmlsZXNcIjogW1xuICAgIFwiZGlzdFwiXG4gIF0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2NqZS11aS1saWJyYXJ5LmVzLmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvY2plLXVpLWxpYnJhcnkudW1kLmpzXCJcbiAgICB9XG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl43LjIuMVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1pbnRlcmFjdGlvbnNcIjogXCJeNy4yLjFcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tbGlua3NcIjogXCJeNy4yLjFcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tb25ib2FyZGluZ1wiOiBcIl4xLjAuOFwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1zdHlsaW5nXCI6IFwiXjEuMy41XCIsXG4gICAgXCJAc3Rvcnlib29rL2Jsb2Nrc1wiOiBcIl43LjIuMVwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIl43LjIuMVwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjcuMi4xXCIsXG4gICAgXCJAc3Rvcnlib29rL3Rlc3RpbmctbGlicmFyeVwiOiBcIl4wLjIuMFwiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbVwiOiBcIl41LjE3LjBcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvcmVhY3RcIjogXCJeMTQuMC4wXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMi4xNVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4yLjdcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl40LjAuM1wiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNDUuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1yZWZyZXNoXCI6IFwiXjAuNC4zXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXN0b3J5Ym9va1wiOiBcIl4wLjYuMTNcIixcbiAgICBcImh1c2t5XCI6IFwiXjguMC4zXCIsXG4gICAgXCJqZXN0LXN0eWxlZC1jb21wb25lbnRzXCI6IFwiXjcuMS4xXCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xMy4yLjNcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMC4xXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIjogXCJeMTguMi4wXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJeNy4yLjFcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4wLjJcIixcbiAgICBcInZpdGVcIjogXCJeNC40LjVcIixcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4zLjUuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tbGludGVyXCI6IFwiXjIuMC4zXCIsXG4gICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjQuMi4wXCIsXG4gICAgXCJ2aXRlc3RcIjogXCJeMC4zNC4xXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwic3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNi4wLjdcIlxuICB9LFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9jaGllZHVlZ2J1bW9rZWkvdWktbGlicmFyeS5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtdLFxuICBcImF1dGhvclwiOiBcIkNoaWVkdSBFZ2J1bW9rZWlcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaGllZHVlZ2J1bW9rZWkvdWktbGlicmFyeS9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NoaWVkdWVnYnVtb2tlaS91aS1saWJyYXJ5I3JlYWRtZVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNKRSBVSSBMaWJyYXJ5ISBpcyBhIGNvbGxlY3Rpb24gb2YgcmV1c2FibGUgYW5kIGN1c3RvbWl6YWJsZSBjb21wb25lbnRzIHRoYXQgc2ltcGxpZnkgdGhlIHByb2Nlc3Mgb2YgYnVpbGRpbmcgbW9kZXJuIHVzZXIgaW50ZXJmYWNlcy4gSXQgcHJvdmlkZXMgYSB3aWRlIHJhbmdlIG9mIFVJIGVsZW1lbnRzIGFuZCBzdHlsZXMgdG8gZW5oYW5jZSB0aGUgdmlzdWFsIGFwcGVhbCBhbmQgZnVuY3Rpb25hbGl0eSBvZiB3ZWIgYXBwbGljYXRpb25zLlwiXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxlQUFlO0FBRXhCLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sbUJBQW1COzs7QUNzRXhCLHVCQUFvQjtBQUFBLEVBQ2xCLE9BQVM7QUFBQSxFQUNULGFBQWE7QUFBQSxFQUNiLHFCQUFxQjtBQUN2Qjs7O0FEekVGLElBQU0sRUFBRSxVQUFVLGFBQWEsSUFBSTtBQUluQyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxlQUFlO0FBQUEsRUFDMUMsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLE1BQ1gsU0FBUyxDQUFDLHNCQUFzQjtBQUFBLE1BQ2hDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUFBLElBQ3ZDLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxpQkFBaUI7QUFBQSxJQUM3QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQ2hDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxrQkFBa0IsTUFBTTtBQUFBLElBQ2hEO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsR0FBRyxPQUFPLEtBQWlCLGdCQUFnQixDQUFDO0FBQUEsSUFDekQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsRUFDZDtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
