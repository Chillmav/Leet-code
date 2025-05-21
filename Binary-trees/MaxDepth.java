package Binary-trees;

class Solution {

    public int maxDepth(TreeNode root) {

        // DFS recursive

        // if (root == null) return 0;

        // return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));


        // BFS iterative

        // if (root == null) return 0;

        // Queue<TreeNode> queue = new LinkedList<>();

        // queue.add(root);

        // int depth = 0;
        // while (queue.size() != 0) {

        //     int length = queue.size();

        //     for (int i = 0; i < length; i++) {

        //         TreeNode node = queue.poll();

        //         if (node.right != null) {
        //             queue.add(node.right);
        //         }

        //         if (node.left != null){
        //             queue.add(node.left);
        //         }

                
        //     }

        //     depth++;
        // }
        
        // return depth;

        // DFS interative

    //     if (root == null) return 0;

    //     int result = 0;

    //     Stack<Object []> stack = new Stack<>();

    //     stack.push(new Object[]{root, 1});

    //     while (!stack.empty()) {

    //         Object [] top = stack.pop();

    //         TreeNode node = (TreeNode) top[0];
    //         int depth = (int) top[1];

    //         if (depth > result) result = depth;

    //         if (node.right != null) stack.push(new Object []{node.right, depth + 1});
    //         if (node.left != null) stack.push(new Object []{node.left, depth + 1});

    //     }

    // return result;
    
    }
    
}
