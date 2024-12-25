import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Next.js core linting rules
    "next/typescript", // TypeScript support for Next.js
    "prettier" // Disable formatting rules that Prettier handles
  ),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Next.js-specific rules
      "next/no-server-import-in-page": "error", // Ensure server imports are used only in server components

      // General React and TypeScript rules
      "react/react-in-jsx-scope": "off", // Not needed for Next.js
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }], // Warn for console logs except warn and error

      // Best practices
      "jsx-a11y/anchor-is-valid": "off", // Links are validated using next/link
      "jsx-a11y/alt-text": ["warn"], // Ensure alt text for images
      "no-restricted-imports": [
        "error",
        {
          patterns: ["**/pages/**"], // Block references to old `pages` directory
        },
      ],
    },
  },
];

export default eslintConfig;
