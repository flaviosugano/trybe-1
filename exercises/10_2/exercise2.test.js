const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('should return the name contained in the id', () => {
  it('return the user name', () => {
    expect.assertions(1);
    return getUserName(4).then(name => expect(name).toEqual('Mark'));
  }) 
})

describe('should return error -user id not found', () => {
  it('return error', () => {
    expect.assertions(1);
    return getUserName(6).catch(error => expect(error).toEqual({ error: 'User with 6 not found.' }))
  });
})


