def partitionEqualSum(arr):
  total = sum(arr)
  cache = {}
  def _helper(i, total, other_total):
    if i == len(arr) or total > other_total:
      return False
    if total == other_total:
      return True
    
    ck = "{},{}".format(i, total) # str(i) + ',' + str(total)
    
    if ck in cache:
      return cache[ck]
  
    res = _helper(i + 1, total + arr[i], other_total - arr[i])
    res = res or _helper(i + 1, total, other_total)

    cache[ck] = res
    return res
  
  return _helper(0, 0, total)

print(partitionEqualSum([1,5,11,5]))
