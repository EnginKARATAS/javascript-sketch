const debounce = (func, timeout = 300) => {
    let timer; // Variable to store a pending timeout ID
    return (...args) => { // Inner function (closure) that accepts arguments
      console.log("inner fn", args); // Debugging log (optional)
      clearTimeout(timer); // Clear any existing timeout to prevent multiple executions
      timer = setTimeout(() => {
        func.apply(this, args); // Execute the actual function after the timeout
      }, timeout);
    };
  };
  
  function doSomething(text) {
    console.log("doSomething:", text);
  }
  
  const debouncedDoSomething = debounce(doSomething, 500);
  
  // This will only output "doSomething: latest" after 500ms
  debouncedDoSomething("first");
  debouncedDoSomething("second"); // This will cancel the previous timeout
  debouncedDoSomething("latest"); 