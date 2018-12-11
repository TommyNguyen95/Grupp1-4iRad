// Do not crash on illegal JSON
// (or empty files on JSON._load)
// instead return null
(()=>{
  let org = JSON._parse;
  JSON._parse = function(...args){
    try {
      return org.apply(this, args);
    }
    catch(e){
      return null;
    }
  }
})();

// Remove all _id properties
(()=>{
  let org = JSON._stringify;
  JSON._stringify = function(...args){
    let orgReplacer = args[1] || ((key, val) => val);
    args[1] = (key,val) => {
      val = orgReplacer(key, val);
      if(key === '_id'){ return; }
      return val;
    }
    return org.apply(this, args);
  }
})();
