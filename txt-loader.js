module.exports = function TxtLoader(txt) {
  console.log(`TxtLoader invoked with: ${txt}`)
  return `export const TEXT: string = ${JSON.stringify(txt)}`
}
