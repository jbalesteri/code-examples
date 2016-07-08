/* RECURSION EXAMPLE */


function recursionExample(num){
     function a(num) {
          if(num > 20) return num;
          return b(num + 2);
     }

     function b(num) {
          return c(num) + 1;
     }

     function c(num) {
          return a(num * 2);
     }
};

recursionExample(1);
