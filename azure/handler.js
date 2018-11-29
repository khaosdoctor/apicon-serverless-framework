'use strict';
/* eslint-disable no-param-reassign */

function fact (number) {
  let fval = 1
  for (let i = 2; i <= number; i++) {
      fval = fval * i
  }
  return fval
}

module.exports.factorial = function (context, trg, input) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log(context, trg, input)

  context.res = {
    status: 200, /* Defaults to 200 */
    body: JSON.stringify({
      answer: fact(context.req.query.number)
    })
  };

  context.done();
};
