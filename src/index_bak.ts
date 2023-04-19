import cats from "../data/cats.json";
// import cats from "../data/configs.json";
import { BaseInfo, CollectionInfo, SubDetail, ConfigItem } from "./interface"
export default function detectPatterns(name: `${string}.bit`): Set<string> {
  const prefix = name.slice(0, -4);
  const results = new Set<string>();
  for (const cat of Object.values(cats)) {
    // exclude Rare4D
    if (cat.names.includes(prefix) && cat.name.en != "Rare4D") {
      results.add(cat.name.en);
    }
  }
  return results;
}
