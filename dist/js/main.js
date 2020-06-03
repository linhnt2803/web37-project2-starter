window.onload = init

async function init() {
  let list = await getListProduct()
  console.log('list', list)
}

// console.log('Client JS!')

// // test call api to server
// getListProduct()
//   .then(console.log)
//   .catch(console.error)
