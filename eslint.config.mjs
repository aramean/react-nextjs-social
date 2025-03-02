import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error", "never", { "beforeStatementContinuationChars": "never" }],
      "comma-dangle": ["error", "never"],
      "multiline-ternary": ["error", "never"],
      "operator-linebreak": ["error", "none"],
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "padding-line-between-statements": ["error", { "blankLine": "always", "prev": "directive", "next": "*" }]
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error"
    }
  }
]

export default eslintConfig
