const str = '2+3*2-(2+1)'

function solve(str) {
  let ops = [], nums = []
  const map = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
  }
  function operate() {
    const b = nums.pop()
    const a = nums.pop() 
    const op = ops.pop()

    // console.log('----', b, a, op, nums, ops)
    switch(op) {
      case '+':
        nums.push(a + b)
        break
      case '-':
        nums.push(a - b)
        break
      case '*':
        nums.push(a * b)
        break
      case '/':
        nums.push(a / b)
        break
    }
  }
  for(let i=0; i<str.length; i++) {
    const char = str[i]
    if (!isNaN(char)) {
      nums.push(parseInt(char))
    } else if (char === '(') {
      ops.push(char)
    } else if (char === ')') {
      operate()
      ops.pop()
    } else {
      let tmp =  ops[ops.length - 1]
      if (ops.length > 0 && ) {
        console.log('tmp', tmp)

      }

      // while()
      ops.push(char)
    }
  }

  while (ops.length > 0) {
    operate()
  }

  return nums.pop()
}


console.log(solve(str))