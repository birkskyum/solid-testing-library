import { defineConfig } from "vitest/config";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    coverage: {
      reporter: ["lcov", "text"],
      include: ["src/index.ts"],
      exclude: ["src/types.ts"]
    },
    watch: false,
    globals: true,
    clearMocks: true,
    environment: "jsdom",
    transformMode: {
      web: [/\.[jt]sx?$/]
    },
    include: "src/__tests__/*.tsx"
  },
  resolve: {
    conditions: ["browser", "development"]
  }
});
