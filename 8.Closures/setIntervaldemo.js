let id = setInterval(function () {
  console.log("task completed again");
}, 3000);

setTimeout(function () {
  clearInterval(id);
}, 13000);
