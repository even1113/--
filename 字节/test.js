function render(template, data) {
  return template.replace(/\{\{\s*[a-z]\s*\}\}/g, function(match) {
    let key = match.slice(2,-2)
    key = key.trim()
    return data[key]
  })

}

let template = 'aaa {{ b }} ccc {{d}}'
let data = {
  b: 'hello',
  d: 'world'
}
console.log(render(template, data))