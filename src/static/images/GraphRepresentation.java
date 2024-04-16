import java.util.*;

class GraphRepresentation {
  public static void main(String args[]) throws Exception {
    //adjacency matrix
    int nodes = 10;
    // in this case we consider node start from 0 to 9 that is total of 10 nodes
    // in Java we have ArrayList or LinkedList what ever you prefer that implements List
    ArrayList<LinkedList<Integer>> adjList = new ArrayList<LinkedList<Integer>>(nodes);
    for(int i=0; i<nodes; i++) {
      adjList.add(new ArrayList<Integer>());
    }
    int edges = 8;
    Scanner scan = new Scanner(System.in);
    int x;
    int y;
    for(int i=0; i<edges; i++) {
      x = scan.nextInt();
      y = scan.nextInt();
      //for bidirectional edges
      adjList.get(x).add(y);
      adjList.get(y).add(x);
    }
  }
}