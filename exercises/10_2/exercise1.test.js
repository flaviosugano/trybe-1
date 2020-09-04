const uppercase = (str, callback) => {
  setTimeout(() => {
    console.log('Exercício 1 passou')
    callback(str.toUpperCase());
  }, 200); 
}

test('should check if letters are uppercase', done =>{
  uppercase('alessandra', (result) => {
    expect(result).toBe('ALESSANDRA');
    done();
  })
})