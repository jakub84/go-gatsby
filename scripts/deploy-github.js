const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/jakub84/jakub84.github.io/go-gatsby.git',
  },
  () => {
    console.log('Deploy Complete!');
  },
);
