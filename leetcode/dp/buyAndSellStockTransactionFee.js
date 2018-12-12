function maxProfit(rates, fee) {
  let cache = {};
  let iters = 0;
  function _helper(i, isAbleToBuy, currentProfit){
    if(i >= rates.length)
      return currentProfit;
    let k = i + ',' + currentProfit + ',' + isAbleToBuy;
    if(typeof cache[k] != 'undefined')
      return cache[k];

    if(isAbleToBuy) {
      return cache[k] = Math.max(
        _helper(i + 1, false, currentProfit - rates[i] - fee),
        _helper(i + 1, true, currentProfit)
      );
    } else {
      return cache[k] = Math.max(
         _helper(i + 1, false, currentProfit), 
         _helper(i + 1, true, currentProfit + rates[i])
      );
    }
  }
  return _helper(0, true, 0);  
}

