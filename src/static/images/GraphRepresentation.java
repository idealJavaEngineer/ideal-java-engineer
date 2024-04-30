import java.util.*;

class Disjoint {
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
      int[] connected = new int[n];
      int[] size = new int[n];
      for(int i=0;i<n;i++) {
        //everyone is its own parent
        connected[i] = i;
        size[i] = 1;
      }
    }

    /**
     * We going to check which node a or b have more no. of child and that going to 
     * be the parent of other
     * as soon as parent one is set as parent of other it will also,
     */
    public static void union(int[] connected, int[] size, int a , int b) {
      int rootA = root(connected, a);
      int rootB = root(connected, b);
      if(size[rootA] > size[rootB]) {
        size[rootA] += size[rootB];
        connected[rootB] = connected[rootA];
      } else {
        size[rootB] += size[rootA];
        connected[rootA] = connected[rootB];
      }
    }
    
    /**
     * root method will return the root of the tree to which the node x is connected
     */
    private static int root(int[] connected, int x) {
      while(connected[ x ] != x)
      {
        connected[ x ] = connected[ connected[ x ] ] ; 
        x = connected[ x ]; 
      }
      return x;
    }
    
    
    /**
     * find method will return boolean value based on if node are part of same connected graph
     */
    public static boolean find(int[] connected, int a, int b) {
      if(root(connected, a) != root(connected, b)) {
        return false;
      }
      return true;
    }
    
}

public void union(int a, int b) {
	int currA = connect[a];
	for(int i=0;i<N;i++) {
		if(connect[i] == currA) {
			connect[i] = connect[b];
		}
	}
}
