const pluginVue = require("eslint-plugin-vue");
const {
  defineConfigWithVueTs,
  vueTsConfigs,
} = require("@vue/eslint-config-typescript");
const prettierConfig = require("@vue/eslint-config-prettier");

module.exports = defineConfigWithVueTs(
  {
    ignores: ["dist/**", "public/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: {
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
  },
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  prettierConfig,
  {
    rules: {
      "vue/no-v-html": "off",
      "vue/multi-word-component-names": "off",
    },
  },
);
