module.exports = {
  linters: {
    '**/*.+(js|md|ts|css|sass|less|graphql|json)': [
      'eslint --fix',
      'prettier --write',
      'git add'
    ]
  }
};
