const cats =require("../data/cats.json")
const oo={}
Object.keys(cats).forEach(key=>{
  const obj=cats[key]
  oo[key]={
    "zh-CN":"",
    en:"",
    reg:"",
    name:obj.name.en,
    ...obj.summary,
  }
})
console.log(oo)

var p={
  '999': {
    'zh-CN': '从 000 到 999 的 3 位数字',
    en: '3 digits from 000 to 999',
    reg: /^[0-9]{3}$/,
    name: '999'
  },
  aaa: { 'zh-CN': '', en: '', reg: '', name: 'AAA' },
  abc: {
    'zh-CN': '3 位顺子号',
    en: '3 digits in sequence',
    reg: /^(0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)|9(?=0))[0-9]{2}$/,
    name: 'ABC'
  },
  abb: { 'zh-CN': '', en: '', reg: '', name: 'ABB' },
  aba: { 'zh-CN': '', en: '', reg: '', name: 'ABA' },
  aab: { 'zh-CN': '', en: '', reg: '', name: 'AAB' },
  '360-degree': { 'zh-CN': '', en: '', reg: '', name: '360Degree' },
  '0x999': { 'zh-CN': '', en: '0x000 - 0x999', reg: '', name: '0x999' },
  '999jp': { 'zh-CN': '', en: '', reg: '', name: '999JP' },
  '999cn': { 'zh-CN': '', en: '', reg: '', name: '999CN' },
  arabic999: {
    'zh-CN': '3 位阿拉伯文数字, 从 000 到 999',
    en: '3 Arabic digits from 000 to 999',
    reg: /^[\u0660-\u0669]{3}$/,
    name: 'Arabic999'
  },
  flag999: { 'zh-CN': '', en: '', reg: '', name: 'Flag999' },
  '10k': {
    'zh-CN': '从 0000 到 9999 的 4 位数字',
    en: '4 digits from 0000 to 9999',
    reg: /^[0-9]{4}$/,
    name: '10K'
  },
  abcd: {
    'zh-CN': '4 位顺子号',
    en: '4 digits in sequence',
    reg: /^(0(?=123)|1(?=234)|2(?=345)|3(?=456)|4(?=567)|5(?=678)|6(?=789)|7(?=890)|8(?=901)|9(?=012))[0-9]{3}$/,
    name: 'ABCD'
  },
  aaaa: { 'zh-CN': '', en: '', reg: '', name: 'AAAA' },
  abbb: { 'zh-CN': '', en: '', reg: '', name: 'ABBB' },
  aabb: { 'zh-CN': '', en: '', reg: '', name: 'AABB' },
  aaab: { 'zh-CN': '', en: '', reg: '', name: 'AAAB' },
  abaa: { 'zh-CN': '', en: '', reg: '', name: 'ABAA' },
  aaba: { 'zh-CN': '', en: '', reg: '', name: 'AABA' },
  abba: { 'zh-CN': '', en: '', reg: '', name: 'ABBA' },
  abab: { 'zh-CN': '', en: '', reg: '', name: 'ABAB' },
  aabc: { 'zh-CN': '', en: '', reg: '', name: 'AABC' },
  abcc: { 'zh-CN': '', en: '', reg: '', name: 'ABCC' },
  abbc: { 'zh-CN': '', en: '', reg: '', name: 'ABBC' },
  '0xxx': { 'zh-CN': '', en: '', reg: '', name: '0XXX' },
  '00xx': { 'zh-CN': '', en: '', reg: '', name: '00XX' },
  '0x0x': { 'zh-CN': '', en: '', reg: '', name: '0X0X' },
  '0xx0': { 'zh-CN': '', en: '', reg: '', name: '0XX0' },
  xx00: { 'zh-CN': '', en: '', reg: '', name: 'XX00' },
  x0x0: { 'zh-CN': '', en: '', reg: '', name: 'X0X0' },
  xx88: {
    'zh-CN': '以 88 结尾的 4 位数字',
    en: '4 digits endings with 88',
    reg: /^[0-9]{2}88$/,
    name: 'XX88'
  },
  xx69: { 'zh-CN': '', en: '', reg: '', name: 'XX69' },
  'times-table': { 'zh-CN': '', en: '', reg: '', name: 'TimesTable' },
  mmdd: {
    'zh-CN': '生日号 0101 到 1231',
    en: 'Birthdays 0101 to 1231',
    reg: /^(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
    name: 'MMDD'
  },
  '0x10k': { 'zh-CN': '', en: '0x0000 - 0x9999', reg: '', name: '0x10K' },
  arabic10k: {
    'zh-CN': '4 位阿拉伯文数字, 从 0000 到 9999',
    en: '4 Arabic digits from 0000 to 9999',
    reg: /^[\u0660-\u0669]{4}$/,
    name: 'Arabic10K'
  },
  '100k': {
    'zh-CN': '5 个数字的域名。',
    en: 'Names with 5 digits.',
    reg: /^[0-9]{5}$/,
    name: '100K'
  },
  aaaaa: { 'zh-CN': '', en: '', reg: '', name: 'AAAAA' },
  abcde: {
    'zh-CN': '5 位顺子号',
    en: '5 digits in sequence',
    reg: /^(0(?=1234)|1(?=2345)|2(?=3456)|3(?=4567)|4(?=5678)|5(?=6789)|6(?=7890)|7(?=8901)|8(?=9012)|9(?=0123))[0-9]{4}$/,
    name: 'ABCDE'
  },
  abbbb: { 'zh-CN': '', en: '', reg: '', name: 'ABBBB' },
  aabbb: { 'zh-CN': '', en: '', reg: '', name: 'AABBB' },
  aaabb: { 'zh-CN': '', en: '', reg: '', name: 'AAABB' },
  aaaab: { 'zh-CN': '', en: '', reg: '', name: 'AAAAB' },
  abbba: { 'zh-CN': '', en: '', reg: '', name: 'ABBBA' },
  abaaa: { 'zh-CN': '', en: '', reg: '', name: 'ABAAA' },
  aabaa: { 'zh-CN': '', en: '', reg: '', name: 'AABAA' },
  aaaba: { 'zh-CN': '', en: '', reg: '', name: 'AAABA' },
  ababa: { 'zh-CN': '', en: '', reg: '', name: 'ABABA' },
  xabcd: {
    'zh-CN': '以 4 位顺子号结尾的 5 位数字',
    en: '5 digits endings with 4-digits in sequence',
    reg: /^[0-9](0(?=123)|1(?=234)|2(?=345)|3(?=456)|4(?=567)|5(?=678)|6(?=789)|7(?=890)|8(?=901)|9(?=012))[0-9]{3}$/,
    name: 'XABCD'
  },
  xx000: { 'zh-CN': '', en: '', reg: '', name: 'XX000' },
  '00xx0': { 'zh-CN': '', en: '', reg: '', name: '00XX0' },
  '000xx': {
    'zh-CN': '以 000 开头的 5 位数字',
    en: '5 digits startings with 000',
    reg: /^000[0-9]{2}$/,
    name: '000XX'
  },
  xx420: {
    'zh-CN': '以 420 结尾的 5 位数字',
    en: '5 digits endings with 420',
    reg: /^[0-9]{2}420$/,
    name: 'XX420'
  },
  aaabc: { 'zh-CN': '', en: '', reg: '', name: 'AAABC' },
  aabbc: { 'zh-CN': '', en: '', reg: '', name: 'AABBC' },
  aabcc: { 'zh-CN': '', en: '', reg: '', name: 'AABCC' },
  abccc: { 'zh-CN': '', en: '', reg: '', name: 'ABCCC' },
  abbcc: { 'zh-CN': '', en: '', reg: '', name: 'ABBCC' },
  abbbc: { 'zh-CN': '', en: '', reg: '', name: 'ABBBC' },
  abcba: { 'zh-CN': '', en: '', reg: '', name: 'ABCBA' },
  xxx69: { 'zh-CN': '', en: '', reg: '', name: 'XXX69' },
  '69xxx': { 'zh-CN': '', en: '', reg: '', name: '69XXX' },
  '00xxx': { 'zh-CN': '', en: '', reg: '', name: '00XXX' },
  xxx00: { 'zh-CN': '', en: '', reg: '', name: 'XXX00' },
  aaaaaa: { 'zh-CN': '', en: '', reg: '', name: 'AAAAAA' },
  abbbbb: { 'zh-CN': '', en: '', reg: '', name: 'ABBBBB' },
  aabbbb: { 'zh-CN': '', en: '', reg: '', name: 'AABBBB' },
  aaabbb: { 'zh-CN': '', en: '', reg: '', name: 'AAABBB' },
  aaaabb: { 'zh-CN': '', en: '', reg: '', name: 'AAAABB' },
  aaaaab: { 'zh-CN': '', en: '', reg: '', name: 'AAAAAB' },
  abbabb: { 'zh-CN': '', en: '', reg: '', name: 'ABBABB' },
  ababab: { 'zh-CN': '', en: '', reg: '', name: 'ABABAB' },
  '00xx00': { 'zh-CN': '', en: '', reg: '', name: '00XX00' },
  aabbcc: { 'zh-CN': '', en: '', reg: '', name: 'AABBCC' },
  abcccc: { 'zh-CN': '', en: '', reg: '', name: 'ABCCCC' },
  abbbbc: { 'zh-CN': '', en: '', reg: '', name: 'ABBBBC' },
  aaaabc: { 'zh-CN': '', en: '', reg: '', name: 'AAAABC' },
  abcabc: { 'zh-CN': '', en: '', reg: '', name: 'ABCABC' },
  xxx420: {
    'zh-CN': '420 结尾的 6 位数字',
    en: '6 digits endings with 420',
    reg: /^[0-9]{3}420$/,
    name: 'XXX420'
  },
  '420xxx': {
    'zh-CN': '420 开头的 6 位数字',
    en: '6 digits startings with 420',
    reg: /^420[0-9]{3}$/,
    name: '420XXX'
  },
  xxx000: { 'zh-CN': '', en: '', reg: '', name: 'XXX000' },
  '000xxx': { 'zh-CN': '', en: '', reg: '', name: '000XXX' },
  'a-share-code': { 'zh-CN': '', en: '', reg: '', name: 'AShareCode' },
  xxxx69: {
    'zh-CN': '以 69 结尾的 6 位数字',
    en: '6 digits endings with 69',
    reg: /^[0-9]{4}69$/,
    name: 'XXXX69'
  },
  aaabbbb: { 'zh-CN': '', en: '', reg: '', name: 'AAABBBB' },
  aaaabbbb: { 'zh-CN': '', en: '', reg: '', name: 'AAAABBBB' },
  abbcbba: { 'zh-CN': '', en: '', reg: '', name: 'ABBCBBA' },
  'wan-club': {
    'zh-CN': '以万为单位，从 1 万到 999 万的数字',
    en: 'Digits from 1w to 999w',
    reg: /^[1-9][0-9]{0,2}0000$/,
    name: 'WanClub'
  },
  xxxaaaaaaaa: { 'zh-CN': '', en: '', reg: '', name: 'XXXAAAAAAAA' },
  '0x9': { 'zh-CN': '', en: '0x0 - 0x9', reg: '', name: '0x9' },
  '0x99': { 'zh-CN': '', en: '0x00 - 0x99', reg: '', name: '0x99' },
  '1-hex': { 'zh-CN': '1 位 16 进制数字', en: '1 Hex Digit', reg: /^[0-9a-f]$/, name: '1Hex' },
  '2-hex': { 'zh-CN': '2 位 16 进制数字', en: '2 Hex digits', reg: /^[0-9a-f]{2}$/, name: '2Hex' },
  '3-hex': { 'zh-CN': '3 位 16 进制数字', en: '3 Hex digits', reg: /^[0-9a-f]{3}$/, name: '3Hex' }
}