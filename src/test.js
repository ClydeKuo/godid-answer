const aList = require("../data/a-list.json")
const xList = require("../data/x-list.json")
const sList = require("../data/s-list.json")
const rList = require("../data/r-list.json")
/**
 * 检查是否符合含有X格式
 * @param {字符串} str
 * @returns
 */
const checkX = str => {
  const res = []
  loop1: for (let i = 0; i < xList.length; i++) {
    const nameEn = xList[i].nameEn
    if (str.length === nameEn.length && /^\d+$/.test(str)) {
      loop2: for (let n = 0; n < str.length; n++) {
        if (nameEn[n] === "X") continue loop2
        if (nameEn[n] !== str[n]) continue loop1
      }
      res.push(nameEn)
    }
  }
  return res
}
/**
 * 检查是否符合字母表叠词格式
 * @param {字符串} str
 * @returns
 */
const checkA = str => {
  const res = []
  loop1: for (let i = 0; i < aList.length; i++) {
    const nameEn = aList[i].nameEn
    if (str.length === nameEn.length && /^\d+$/.test(str)) {
      console.log("loop1", nameEn)
      const iterMap = {}
      loop2: for (let n = 0; n < str.length; n++) {
        if (iterMap.hasOwnProperty(nameEn[n])) {
          if (iterMap[nameEn[n]] !== str[n]) continue loop1
        } else {
          if (Object.values(iterMap).includes(str[n])) continue loop1
          iterMap[nameEn[n]] = str[n]
        }
      }
      // console.log("push", nameEn, str)
      res.push(nameEn)
    }
  }
  return res
}
/**
 * 检查是否符合顺子格式
 * @param {字符串} str
 * @returns
 */
const checkS = str => {
  const res = []
  loop1: for (let i = 0; i < sList.length; i++) {
    const nameEn = sList[i].nameEn
    if (str.length === nameEn.length && /^\d+$/.test(str)) {
      console.log("loop1", nameEn)
      loop2: for (let n = 0; n < str.length; n++) {
        if (nameEn[n] === "X") {
          n++
          continue loop2
        } else if (n === 0) {
          continue loop2
        } else if (str[n] - str[n - 1] !== 1) {
          continue loop1
        }
      }
      res.push(nameEn)
    }
  }
  return res
}
/**
 * 检查是否符合99乘法表格式
 * @param {字符串} str
 * @returns
 */
const checkTT = str => (/^\d{4}$/.test(str) && str[0] * str[1] === Number(str.slice(-2)) ? ["TimesTable"] : [])

/**
 * 检查是否符合正则表达式
 * @param {字符串} str
 * @returns
 */
const checkRegexp = str => {
  const res = []
  for (let i = 0; i < rList.length; i++) {
    const nameEn = rList[i].nameEn
    const reg = new RegExp(rList[i].reg)
    if (reg.test(str)) {
      res.push(nameEn)
    }
  }
  return res
}
console.log(checkRegexp("13577777777"))
