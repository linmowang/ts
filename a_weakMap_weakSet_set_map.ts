namespace SetMap {
  let set: Set<number> = new Set([1, 2, 3, 3, 4, 4, 5, 5]); //天然去重 引用类型除外
  console.log(set);

  set.add(7);
  set.delete(5);
  console.log(set.has(7));
  set.clear();
  set.forEach;
  set.keys;
  for (const item of set) {
    console.log(item);
  }

  let obj = { name: "xiamna" };
  let map: Map<object, any> = new Map();
  map.set(obj, "xiaoman");
  // 方法同set

  // weakmap weakset 弱引用 不会被计入垃圾回收策略
  // weakmap map 区别  weakmap的key只能是引用类型
  //
  let obj2: any = { name: "sdf" }; //1
  let aahph: any = obj2; //2
  let weakmap: WeakMap<object, any> = new WeakMap();
  weakmap.set(obj2, "sadsad"); //2

  // 如果强引用指向null weakmap.get(obj2) === undefined
  obj2 = null; // -1
  aahph = null; // -2
  console.log(weakmap.get(obj2));
}
