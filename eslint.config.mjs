import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Auto-sort imports
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Side effect imports (polyfills, etc.)
            ["^\\u0000"],
            // Node.js builtins
            ["^node:"],
            // Packages
            ["^@?\\w"],
            // Absolute imports (e.g. @/lib)
            ["^@"],
            // Relative imports
            ["^\\."],
          ],
        },
      ],
      // Auto-sort exports
      "simple-import-sort/exports": "error",
    },
  },
];

export default eslintConfig;
