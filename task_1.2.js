//Implement an immutable deepMerge
function deepMerge(o1, o2) {
    let o3 = {};
    for (const key in o2) {
      if (typeof (o2[key]) === "object") {
        if (!o1[key]){
          Object.assign(o1, { [key]: {} });
        }
        o3 = deepMerge(o1[key], o2[key]);
        } else { 
        o3 = Object.assign(o1, { [key]: o2[key] });
        }
    }
    return o3;
  }
  
  let o1 = {x: {y: "x.y"}}
  let o2 = {x: {z: "x.z"}}
  
  console.log(deepMerge(o1, o2)) // {x: {y: "x.y", z: "x.z"}}
  console.log(deepMerge(o2, o1)) // {x: {z: "x.z", y: "x.y"}}
  
  // for comparison
  // console.log(merge(o1, o2)) // {x: {z: "x.z"}} -- o2 in this case
  // console.log(merge(o2, o1)) // {x: {y: "x.y"}} -- o1 in this case