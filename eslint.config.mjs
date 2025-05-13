import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off",            // allow <img>
      "@next/next/no-sync-scripts": "off",           // allow sync <script>
      "react/no-unescaped-entities": "off",          // allow unescaped quotes
      "@typescript-eslint/no-unused-vars": "warn"
    },
  },
];

export default eslintConfig;

