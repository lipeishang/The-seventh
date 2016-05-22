function fibonacci_series(n) {
    var result = [0,1];
    
    for(var i = 2 ; i <= n; i++){
       result.push(result[i - 2] + result[i - 1]);
   }
    
    return result;
}

module.exports = fibonacci_series;
