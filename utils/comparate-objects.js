export function compareTwoObjects(object1, object2) {
  for (const item in object1) {
    if (object1[item] !== object2[item]) {
      return false
    }
  }

  for (const item in object2) {
    if (object1[item] !== object2[item]) {
      return false
    }
  }
  return true
} 