function canFinish(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  //let  adj = [...Array(numCourses)].map(r => []);
 const adj = new Array(numCourses).fill([]); 
    console.log(adj);
  for (let [u, v] of prerequisites) {
      console.log(`pushing ${u} into ${v}`);
    adj[v].push(u);
  }
    console.log(adj);
  
  for (let c = 0; c < numCourses; c++) {
      //if dfs returns false then we cant reach every course
    if (!dfs(c)) {
        console.log(seen);
        console.log(seeing);
      return false;
    }
  }

  return true;
  

  function dfs(v) {
      console.log('--------');
      console.log('before visiting the ' + v + ' nodes neighbors');
      console.log(seen);
      console.log(seeing);
      console.log('--------');
    seeing.add(v);
    if (seen.has(v)) return true;
    if (seeing.has(v)) return false;
     
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
          //return false if our dfs returns true at any point
        return false;
      }
    }
      console.log('do i ever get here');
    seeing.delete(v);
    seen.add(v);
      console.log('--------');
      console.log('after visiting the ' + v + ' nodes neighbors');
      console.log(seen);
      console.log(seeing);
      console.log('--------');
    return true;
  }
}
console.log(canFinish(2,[[0,1],[1,0]]));
