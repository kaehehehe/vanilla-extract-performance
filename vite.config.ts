import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// 이거 꼭 임포트 되어 있는지 확인!
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    // 그리고 plugins 배열 안에 이게 있는지 확인!
    vanillaExtractPlugin(),
  ],
});
