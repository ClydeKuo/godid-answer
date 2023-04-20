import aList from "../data/a-list.json"
import xList from "../data/x-list.json"
import sList from "../data/s-list.json"
import rList from "../data/r-list.json"
/**
 * 检查是否符合含有X格式
 * @param {字符串} str
 * @returns
 */
function checkX(str: string): Array<string> {
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
function checkA(str: string): Array<string> {
  const res = []
  loop1: for (let i = 0; i < aList.length; i++) {
    const nameEn = aList[i].nameEn
    if (str.length === nameEn.length && /^\d+$/.test(str)) {
      // console.log("loop1", nameEn)
      const iterMap: { [key: string]: string } = {}
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
function checkS(str: string): Array<string> {
  const res = []
  loop1: for (let i = 0; i < sList.length; i++) {
    const nameEn = sList[i].nameEn
    if (str.length === nameEn.length && /^\d+$/.test(str)) {
      // console.log("loop1", nameEn)
      loop2: for (let n = 0; n < str.length; n++) {
        if (nameEn[n] === "X") {
          n++
          continue loop2
        } else if (n === 0) {
          continue loop2
        } else if (Number(str[n]) - Number(str[n - 1]) !== 1) {
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
function checkTT(str: string): Array<string> {
  if(/^[1-9]{2}\d{2}$/.test(str)){
    const num0=Number(str[0])
    const num1=Number(str[1])
    const product=Number(str.slice(-2))
    if(num0<=num1&&num0*num1===product){
      return ["TimesTable"]
    }else{
      return []
    }
  }else{
    return []
  }
}
/**
 * 检查是否符合生日格式
 * @param {字符串} str
 * @returns
 */
 function checkBD(str: string): Array<string> {
  if(/^\d{4}$/.test(str)){
    const month=Number(str.slice(0,2))
    const date=Number(str.slice(-2))
    if(month>=1&&month<=12){
      if([1,3,5,7,8,10,12].includes(month)){
        return date>=1&&date<=31?["MMDD"]:[]
      }else if([4,6,9,11].includes(month)){
        return date>=1&&date<=30?["MMDD"]:[]
      }else {
        return date>=1&&date<=29?["MMDD"]:[]
      }
    }else{
      return []
    }
  }else{
    return []
  }
}

/**
 * 检查是否符合正则表达式
 * @param {字符串} str
 * @returns
 */
function checkRegexp(str: string): Array<string> {
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
function detectPatterns(name: string): Set<string> {
  const prefix = name.slice(0, -4);
  const xRes=checkX(prefix)
  const aRes=checkA(prefix)
  const sRes=checkS(prefix)
  const ttRes=checkTT(prefix)
  const bdRes=checkBD(prefix)
  const regRes=checkRegexp(prefix)
  const results = new Set<string>(xRes.concat(aRes,sRes,ttRes,bdRes,regRes));
  return results;
}
export default detectPatterns