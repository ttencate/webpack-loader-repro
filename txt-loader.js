module.exports = function TxtLoader(txt) {
  console.log(`TxtLoader invoked on ${this.resourcePath} with content ${JSON.stringify(txt)}`)
  if (txt.indexOf('Hello') < 0) {
    throw new Error(`No "Hello" found`)
  }
  return `export const TEXT: string = ${JSON.stringify(txt)}`
}
