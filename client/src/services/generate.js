function makeid (length) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
let url = 'https://www.youtube.com/watch?v='
let alg = (makeid(11))
const generate = url + alg
module.exports = {
  'generate': generate
}
