import fetch from "node-fetch";
import { writeFile } from "node:fs";
import {  CollectionInfo,  ConfigItem } from "./interface"

const getSubDetail = async (subId: string) => {
  const res = await fetch(
    `https://api.godid.io/api/collections/${subId}?compact=false`
  )
  const data = await res.json()
  return data
}
const getCats = async () => {
  const res = await fetch("https://api.godid.io/api/collections/v2?compact=true")
  const results: CollectionInfo[] = await res.json()

  const digitInfo = results.find((ele) => ele.slug == "digits");
  if (!digitInfo) {
    throw new Error("digitInfo not found");
  }
  return digitInfo.subs;
}
const start = async () => {
  const cats = await getCats()
  const config: { [slug: string]: ConfigItem } = {};
  for (let index = 0; index < cats.length; index++) {
    const digitElement = cats[index];
    
    const results = await Promise.all(
      digitElement.subs.map((ele) => getSubDetail(ele.id))
    )
    results.forEach((ele) => {
      if (config[ele.slug]) {
        config[ele.slug].classes.push(digitElement.slug);
      } else {
        if(!ele.names){
          console.log(digitElement.slug);
        }
        config[ele.slug] = {
          classes: [digitElement.slug],
          id: ele.id,
          slug: ele.slug,
          names: ele.names,
          num_name: ele.num_name,
          name: ele.name,
          summary:ele.summary
        };
      }
    });
  }
  writeFile("data/cats.json", JSON.stringify(config), (err) => {
    if (err) {
      throw err;
    }
    console.log("write file success!");
  });
}

start()