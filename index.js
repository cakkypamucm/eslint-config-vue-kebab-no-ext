/* eslint sort-keys/sort-keys-fix: "error" */

module.exports = {
    extends: ["eslint-config-vue-cakkypamucm"],
    rules: {
        "import/extensions": [
            "error",
            "never",
            {
                ignorePackages: false,
                pattern: Object.fromEntries("cjs json module svg".split(" ").map((ext) => [ext, "ignorePackages"]))
            }
        ],

        "unicorn/filename-case": [
            "error",
            {
                case: "kebabCase"
            }
        ],

        "vue/component-name-in-template-casing": [
            "error",
            "kebab-case",
            {
                ignores: [],
                registeredComponentsOnly: false
            }
        ],
        "vue/custom-event-name-casing": ["error", "kebab-case"]
    }
};
