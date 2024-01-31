function fun(inputString, fn) {
  let output = inputString.split(',');
  for (let index = 0; index < output.length; index++) {
    fn(output[index]);
  }
}

fun('name : Vishal, subject: Cse');
