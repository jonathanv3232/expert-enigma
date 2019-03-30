#include <iostream>
#include <vector>

#define INFINITY 1e9
using namespace std;

int coin_change(vector<int> &coins, int target, vector<int> &cache) {
  if(target < 0) return INFINITY;
  if(cache[target] != -1) return cache[target];
  if(target == 0) return 0;
  
  
  int min = INFINITY;
  //take the coin update the target
  for(const auto &c: coins) {
    int x = coin_change(coins, target - c, cache) + 1;
    if(x < min) min = x;
  }
  
  return cache[target] = min;
}

int main()
{
    int target = 1000;
    vector<int> coins = {1,2,3,4,5};
    vector<int> cache(target+1, -1);
    std::cout << coin_change(coins, target, cache) << std::endl;
    return 0;
}

