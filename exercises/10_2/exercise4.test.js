const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('should check if contains repositories: todo-list and meme-generator', () => {
  const url = 'https://api.github.com/users/tryber/repos';
  // expect.assertions(2);
  return getRepos(url).then(result => {
    expect(result).not.toContain('sd-01-week4-5-project-todo-list');
    expect(result).not.toContain('sd-01-week4-5-project-meme-generator');
  });
})
