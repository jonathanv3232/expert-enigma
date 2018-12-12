//up to n numbers
////find all combinations of size k that add up to a target #
//
///*
//Input: candidates = [2,3,6,7], target = 7,
//A solution set is:
//[
//  [7],
//    [2,2,3]
//    ]
//    */
//
//    function combinations(candidates, target) {
//      let solutions = [];
//        function _combs(candidates, target, arr, start) {
//            console.log(target, arr, start);
//                if(target === 0) {
//                      solutions.push(arr.slice());
//                            return;
//                                }
//                                    
//                                        if(target < 0 || start >= candidates.length) return;
//                                            
//                                                // for(let i = start; i < candidates.length; i++) {
//                                                    
//                                                        _combs(candidates, target, arr, start+1);
//                                                            
//                                                                arr.push(candidates[start]);
//                                                                    _combs(candidates, target - candidates[start], arr, start);    
//                                                                        arr.pop();
//                                                                            //}
//                                                                              }
//                                                                                _combs(candidates, target, [], 0);
//                                                                                  return solutions;
//                                                                                  }
//
//                                                                                  let res = combinations([2,3,6,7], 7);
//                                                                                  console.log(res);
