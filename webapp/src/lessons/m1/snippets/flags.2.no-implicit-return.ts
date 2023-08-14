export {}

declare function dangerousStuff(): object

function doSomething(): object | undefined {
  try {
    return dangerousStuff()
  } catch (e) {
    console.error('yeah dangerous')
  }
}
