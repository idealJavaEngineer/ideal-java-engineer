import java.util.*;

class Pair {
  int node;
  int level;
  public Pair(int node, int level) {
    this.node = node;
    this.level = level;
  }
}

class GraphBFS {
    public static void main(String[] args) throws Exception{
      // n is no. of nodes.
      Scanner scan = new Scanner(System.in);
      int n = 10;
      ArrayList<Integer>[] adj = new ArrayList[N+1];
      for(int i=0;i<n;i++) {
        adj[i] = new ArrayList<Integer>();
      }

      int edges = 7;
      int x;
      int y;
      for(int i=0;i<edges;i++) {
        x = scan.nextInt();
        y = scan.nextInt()
        adj[x].add(y);
        adj[y].add(x);
      }

      // array of size no. of nodes all assigned to false by default
      boolean[] isVisited = new boolean[n];
      Queue<Pair> q = new LinkedList<>();
      //we start by adding start Node in Queue and start traversing from there
      //let say level of starting node is 0
      int stNode = 0;
      q.add(new Pair(stNode, 0));
      //set isVisited of start Node to true as it is visited because we start from here
      isVisited[stNode] = true;

      //as we know queue contains the node of curr level from where we get next level nodes 
      //We going to traverse it until q is empty that means no nodes left in graph now to be traversed
      while(!q.isEmpty()) {
        Pair pair = q.poll();
        int currNode = pair.node;
        int currLevel = pair.level;
        //now from the adj list we gonna traverse all the adjacent node of currNode we poll from the queue
        //the traversed node we be next level nodes for us
        for(int x : adj[currNode]) {
          //check if not already Visited
          if(!isVisited[x]) {
            //add the pair with increased level in queue as they belong to next Level.
            q.add(new Pair(x, currLevel + 1));
            //as we push it in queue so that we can get the adjacent node of the node we just pushed
            //mark is asVisited
            isVisited[x] = true;
          }
        }
      }
    }
}