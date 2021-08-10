interface Options {
  length: number;
  randomCase: boolean;
  letters: boolean;
  numbers: boolean;
  others: string[];
}

module.exports = {
  Functions: {
    RandomSequence: function (options: Options) {
      const length = options.length || 10
      const randomCase = options.randomCase || true
      const letters = options.letters || true
      const numbers = options.numbers || true
      const others = options.others || ['_', '-', '.']
    }
  }
}
