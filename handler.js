'use strict'

function fact (number) {
    let fval = 1
    for (let i = 2; i <= number; i++) {
        fval = fval * i
    }
    return fval
}

module.exports.factorial = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
      body: JSON.stringify({
          answer: fact(event.pathParameters.number)
    })
  }

  callback(null, response)
}
