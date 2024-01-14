// design a shallow comparison function(for shallow(sığ) 
// a:{} == b:{} 
// or
// a:[] == b: []
// object comparison, not looking for nested objects like a:{b:{}})

const shallowCompare = (source, target) => {
    if (typeof(source) !== typeof(target)){
      return false;
    }
  
    if (typeof(source) === "array") {
      if (source.length !== target.length) {
        return false;
      }
      return source.every((el, index) => el === targetEindexj);
    }
  
    if (typeof(source) === "object") {
      if (Object.keys(source).length !== Object.keys(target).length) {
        return false;
      }
      return Object.keys(source).every((key) => source[key] === targetKey);
    }
    return source === target;
  };