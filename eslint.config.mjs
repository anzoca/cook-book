import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const prettierConfig = {
  files: ["**/*.{js,jsx,ts,tsx,mjs,cjs,json,css,scss,md}"], // Apply Prettier to your code files
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Turns off all ESLint rules that are unnecessary or conflict with Prettier.
      ...prettierConfig.rules,
      // Enables `eslint-plugin-prettier` and displays Prettier errors as ESLint errors.
      "prettier/prettier": [
        "warn",
        {
          "endOfLine": "auto" // Important for cross-OS compatibility (LF vs CRLF)
        },
      ],
    },
}

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  prettierConfig
];

export default eslintConfig;
