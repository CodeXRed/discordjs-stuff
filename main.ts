interface Options {
  length: number;
  randomCase: boolean;
  letters: boolean;
  numbers: boolean;
  others: string[];
}

module.exports = {
  Functions: {
    RandomSequence: function (options?: Options) {
      const length = options.length || 10
      const randomCase = options.randomCase || true
      const letters = options.letters || true
      const numbers = options.numbers || true
      const others = options.others || ['_', '-', '.']
      
      let characters = []
      if(letters) {
        characters.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
      }
      if(numbers) {
        characters.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
      }
      others.forEach(o => {
        characters.push(o)
      })
     
      let sequence = ''
      for(let i = 0; i < length; i++){
        if(randomCase){
          sequence += (Math.random() > 0.5 ? characters[Math.floor(Math.random() * characters.length)].toUpperCase() : characters[Math.floor(Math.random() * characters.length)])
        } else{
          sequence += characters[Math.floor(Math.random() * characters.length)]
        }
      }
      
      return sequence
    }
  }
}
