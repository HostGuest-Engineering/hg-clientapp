module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react":0,
        "react/jsx-uses-vars":0,
        "react/react-in-jsx-scope":0,
        "react/jsx-filename-extension":0,
        "react/jsx-key":0
    }
};
