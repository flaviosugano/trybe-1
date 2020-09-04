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
    it('return the user name', async () => {
      expect.assertions(1);
      const result = await getUserName(4);
      expect(result).toEqual('Mark');
    }) 
  })

  describe('should return the name contained in the id or error message', () => {
    it('return user name or error message', async () => {
      expect.assertions(1);
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.' });
      }
    });
  });
