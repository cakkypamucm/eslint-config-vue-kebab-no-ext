This is `eslint` config which:

-   sets kebab-case as the only one filename-case in project
-   deny import files with extension (so use import files without it)

### Install

```shell
npm i --save-dev github:cakkypamucm/eslint-config-vue-kebab-no-ext
```

### Use

Add `eslint-config-vue-kebab-no-ext-cakkypamucm` to the "extends" array in your `eslint` config file

<pre>
{
    "extends": ["some-other-config-you-use", <b>"eslint-config-vue-kebab-no-ext-cakkypamucm"</b>]
}
</pre>

### For synergy

Add [stylelint-config-vue-kebab-no-ext-cakkypamucm](https://github.com/cakkypamucm/stylelint-config-vue-kebab-no-ext) to your project
