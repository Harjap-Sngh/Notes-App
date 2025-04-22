// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup compatibility helper
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Include Next.js and TypeScript rules using FlatCompat
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),

  // Custom rule overrides
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];
