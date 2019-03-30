#include <iostream>
#include <queue>
#include <utility>    
#include <unordered_map>
#include <limits>

using namespace std;

int main()
{
   typedef pair<int, int> iPair;

   unordered_map<int, vector<iPair>> graph = {
        {1, {{2, 5},{4,9},{5,1}}},
        {2, {{3,2},{1,5}}},
        {3, {{4,6},{2,2}}},
        {4, {{5,2}, {1,9}, {3,6}}},
        {5, {{1,1}, {4,2}}}
       
   };
  
  const double INF = numeric_limits<double>::max();
  // Iterate and print keys and values of unordered_map
  
  priority_queue<iPair> pq;
  
  //2) Initialize distances of all vertices as infinite.
  //
  const int total_nodes = 5;
  vector<double> weight(total_nodes + 1, INF);
  // start at node 0
  int starting_node = 1;
  // the starting node has a distance of 0 because we are starting here
  weight[starting_node] = 0;
  //3) Insert source vertex into pq
  pq.push(make_pair(-weight[starting_node], starting_node));
  
  vector<bool> seen(total_nodes + 1, false);
  
  while(!pq.empty()) {
    auto next_min = pq.top(); pq.pop();
    auto w = next_min.first;
    auto node = next_min.second;
    
    //make sure that we don't get stuck in a loop
    if(seen[node]) continue;
    seen[node] = true;
    
    for(const auto &neigh : graph[node]) {
      auto neigh_id = neigh.first;
      auto neigh_edgeCost = neigh.second;
      
      if(w + neigh_edgeCost < weight[neigh_id]){
        weight[neigh_id] = w + neigh_edgeCost;
      }
      
      pq.push(make_pair(-weight[neigh_id], neigh_id));
    }
  }
  
  for(const auto &w: weight) {
    cout << w << endl;
  }
  return 0;
}

