# eslint-plugin-smart-quotes

Makes sure that quotes within quotes are curly

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-smart-quotes`:

```
$ npm install eslint-plugin-smart-quotes --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-smart-quotes` globally.

## Usage

Add `smart-quotes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "smart-quotes"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "smart-quotes/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





