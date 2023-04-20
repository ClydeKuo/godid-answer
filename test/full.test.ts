import assert from "assert";
import detectPatterns from "../src/index";
import detectPatternsCheck from "../src/check";
import configs from "../data/configs.json"

const list=Object.values(configs)
for(let i=0;i<list.length;i++){
  const names=list[i].names
  const en=list[i].name.en
  // if(['999', 'AAA', 'ABC', 'ABB', 'ABA', 'AAB', '360Degree', '0x999', '999JP', '999CN', 'Arabic999', 'Flag999', '10K', 'Rare4D', 'ABCD', 'AAAA', 'ABBB', 'AABB', 'AAAB', 'ABAA', 'AABA', 'ABBA', 'ABAB', 'AABC', 'ABCC', 'ABBC', '0XXX', '00XX', '0X0X', '0XX0', 'XX00', 'X0X0', 'XX88', 'XX69', 'TimesTable', 'MMDD', '0x10K', 'Arabic10K', '100K', 'AAAAA', 'ABCDE', 'ABBBB', 'AABBB', 'AAABB', 'AAAAB', 'ABBBA', 'ABAAA', 'AABAA', 'AAABA', 'ABABA', 'XABCD', 'XX000', '00XX0', '000XX', 'XX420', 'AAABC', 'AABBC', 'AABCC', 'ABCCC', 'ABBCC', 'ABBBC', 'ABCBA', 'XXX69', '69XXX', '00XXX', 'XXX00', 'AAAAAA', 'ABBBBB', 'AABBBB', 'AAABBB', 'AAAABB', 'AAAAAB', 'ABBABB'].includes(en)) continue
  console.log(en);
  for(let n=0;n<names.length;n++){
    const name=`${names[n]}.bit`
    try {
      assert.deepEqual(detectPatterns(name),detectPatternsCheck(name))
    } catch (error) {
      console.log('test',name);
      throw error
    }
  }
}