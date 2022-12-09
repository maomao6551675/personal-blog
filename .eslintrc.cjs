module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")
  ],
  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  }
};