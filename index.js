function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}

function nestedTarget(){
  return document.querySelector(`#nested .target`)
}

function deepestChild(){
  let node = document.getElementById(`grand-node`)

  while (node.querySelector(`div`)) {
    node = node.querySelector(`div`)
  }
  return node
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lists.length; i++) {
    let items = lists[i].children
    for (let j = 0; j < items.length; j++) {
      items[j].innerHTML = parseInt(items[j].innerHTML) + n
    }
  }
}
