import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // 1) Extends generales
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ),

  // 2) Ignorar carpetas
  {
    ignores: ["node_modules/", "dist/"],
  },

  // 3) Config global (sin type-checking)
  {
    languageOptions: {
      globals: { ...globals.node },
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
      // Aquí NO va project
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      // tus reglas comunes
    },
  },

  // 4) SOLO para TS/TSX: activa project
  {
    files: ["*.ts", "*.tsx"], // ← esta línea es clave
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json", // ← aquí pones tu tsconfig
      },
    },
    rules: {
      // reglas específicas de TS
    },
  },
];
