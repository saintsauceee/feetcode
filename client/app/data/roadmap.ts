export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Problem {
  id: number;
  title: string;
  difficulty: Difficulty;
  slug?: string;
}

export interface TopicNode {
  id: string;
  label: string;
  x: number;
  y: number;
  problems: Problem[];
}

export interface TopicEdge {
  from: string;
  to: string;
}

export const NODE_W = 172;
export const NODE_H = 44;
export const GRAPH_W = 960;
export const GRAPH_H = 960;

export const nodes: TopicNode[] = [
  {
    id: 'arrays-hashing',
    label: 'Arrays & Hashing',
    x: 394, y: 0,
    problems: [
      { id: 217, title: 'Contains Duplicate', difficulty: 'Easy' },
      { id: 242, title: 'Valid Anagram', difficulty: 'Easy' },
      { id: 1, title: 'Two Sum', difficulty: 'Easy' },
      { id: 49, title: 'Group Anagrams', difficulty: 'Medium' },
      { id: 347, title: 'Top K Frequent Elements', difficulty: 'Medium' },
      { id: 271, title: 'Encode and Decode Strings', difficulty: 'Medium', slug: 'encode-and-decode-strings' },
      { id: 238, title: 'Product of Array Except Self', difficulty: 'Medium' },
      { id: 36, title: 'Valid Sudoku', difficulty: 'Medium' },
      { id: 128, title: 'Longest Consecutive Sequence', difficulty: 'Medium' },
    ],
  },
  {
    id: 'two-pointers',
    label: 'Two Pointers',
    x: 160, y: 110,
    problems: [
      { id: 125, title: 'Valid Palindrome', difficulty: 'Easy' },
      { id: 167, title: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium', slug: 'two-sum-ii-input-array-is-sorted' },
      { id: 15, title: '3Sum', difficulty: 'Medium' },
      { id: 11, title: 'Container With Most Water', difficulty: 'Medium' },
      { id: 42, title: 'Trapping Rain Water', difficulty: 'Hard' },
    ],
  },
  {
    id: 'stack',
    label: 'Stack',
    x: 628, y: 110,
    problems: [
      { id: 20, title: 'Valid Parentheses', difficulty: 'Easy' },
      { id: 155, title: 'Min Stack', difficulty: 'Medium' },
      { id: 150, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium' },
      { id: 22, title: 'Generate Parentheses', difficulty: 'Medium' },
      { id: 739, title: 'Daily Temperatures', difficulty: 'Medium' },
      { id: 853, title: 'Car Fleet', difficulty: 'Medium' },
      { id: 84, title: 'Largest Rectangle in Histogram', difficulty: 'Hard' },
    ],
  },
  {
    id: 'binary-search',
    label: 'Binary Search',
    x: 620, y: 230,
    problems: [
      { id: 704, title: 'Binary Search', difficulty: 'Easy' },
      { id: 74, title: 'Search a 2D Matrix', difficulty: 'Medium' },
      { id: 875, title: 'Koko Eating Bananas', difficulty: 'Medium' },
      { id: 153, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium' },
      { id: 33, title: 'Search in Rotated Sorted Array', difficulty: 'Medium' },
      { id: 981, title: 'Time Based Key-Value Store', difficulty: 'Medium', slug: 'time-based-key-value-store' },
      { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard' },
    ],
  },
  {
    id: 'sliding-window',
    label: 'Sliding Window',
    x: 294, y: 230,
    problems: [
      { id: 121, title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy' },
      { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium' },
      { id: 424, title: 'Longest Repeating Character Replacement', difficulty: 'Medium' },
      { id: 567, title: 'Permutation in String', difficulty: 'Medium' },
      { id: 76, title: 'Minimum Window Substring', difficulty: 'Hard' },
      { id: 239, title: 'Sliding Window Maximum', difficulty: 'Hard' },
    ],
  },
  {
    id: 'linked-list',
    label: 'Linked List',
    x: 20, y: 230,
    problems: [
      { id: 206, title: 'Reverse Linked List', difficulty: 'Easy' },
      { id: 21, title: 'Merge Two Sorted Lists', difficulty: 'Easy' },
      { id: 143, title: 'Reorder List', difficulty: 'Medium' },
      { id: 19, title: 'Remove Nth Node From End of List', difficulty: 'Medium' },
      { id: 138, title: 'Copy List with Random Pointer', difficulty: 'Medium' },
      { id: 2, title: 'Add Two Numbers', difficulty: 'Medium' },
      { id: 141, title: 'Linked List Cycle', difficulty: 'Easy' },
      { id: 287, title: 'Find the Duplicate Number', difficulty: 'Medium' },
      { id: 146, title: 'LRU Cache', difficulty: 'Medium' },
      { id: 23, title: 'Merge K Sorted Lists', difficulty: 'Hard' },
      { id: 25, title: 'Reverse Nodes in K-Group', difficulty: 'Hard' },
    ],
  },
  {
    id: 'trees',
    label: 'Trees',
    x: 394, y: 360,
    problems: [
      { id: 226, title: 'Invert Binary Tree', difficulty: 'Easy' },
      { id: 104, title: 'Maximum Depth of Binary Tree', difficulty: 'Easy' },
      { id: 543, title: 'Diameter of Binary Tree', difficulty: 'Easy' },
      { id: 110, title: 'Balanced Binary Tree', difficulty: 'Easy' },
      { id: 100, title: 'Same Tree', difficulty: 'Easy' },
      { id: 572, title: 'Subtree of Another Tree', difficulty: 'Easy' },
      { id: 235, title: 'Lowest Common Ancestor of a BST', difficulty: 'Medium' },
      { id: 102, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium' },
      { id: 199, title: 'Binary Tree Right Side View', difficulty: 'Medium' },
      { id: 1448, title: 'Count Good Nodes in Binary Tree', difficulty: 'Medium' },
      { id: 98, title: 'Validate Binary Search Tree', difficulty: 'Medium' },
      { id: 230, title: 'Kth Smallest Element in a BST', difficulty: 'Medium' },
      { id: 105, title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium' },
      { id: 124, title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard' },
      { id: 297, title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard' },
    ],
  },
  {
    id: 'tries',
    label: 'Tries',
    x: 60, y: 480,
    problems: [
      { id: 208, title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', slug: 'implement-trie-prefix-tree' },
      { id: 211, title: 'Design Add and Search Words Data Structure', difficulty: 'Medium' },
      { id: 212, title: 'Word Search II', difficulty: 'Hard' },
    ],
  },
  {
    id: 'heap',
    label: 'Heap / Priority Queue',
    x: 394, y: 480,
    problems: [
      { id: 703, title: 'Kth Largest Element in a Stream', difficulty: 'Easy' },
      { id: 1046, title: 'Last Stone Weight', difficulty: 'Easy' },
      { id: 973, title: 'K Closest Points to Origin', difficulty: 'Medium' },
      { id: 215, title: 'Kth Largest Element in an Array', difficulty: 'Medium' },
      { id: 621, title: 'Task Scheduler', difficulty: 'Medium' },
      { id: 355, title: 'Design Twitter', difficulty: 'Medium' },
      { id: 295, title: 'Find Median from Data Stream', difficulty: 'Hard' },
    ],
  },
  {
    id: 'backtracking',
    label: 'Backtracking',
    x: 730, y: 480,
    problems: [
      { id: 78, title: 'Subsets', difficulty: 'Medium' },
      { id: 39, title: 'Combination Sum', difficulty: 'Medium' },
      { id: 46, title: 'Permutations', difficulty: 'Medium' },
      { id: 90, title: 'Subsets II', difficulty: 'Medium' },
      { id: 40, title: 'Combination Sum II', difficulty: 'Medium' },
      { id: 79, title: 'Word Search', difficulty: 'Medium' },
      { id: 131, title: 'Palindrome Partitioning', difficulty: 'Medium' },
      { id: 17, title: 'Letter Combinations of a Phone Number', difficulty: 'Medium' },
      { id: 51, title: 'N-Queens', difficulty: 'Hard' },
    ],
  },
  {
    id: 'graphs',
    label: 'Graphs',
    x: 591, y: 600,
    problems: [
      { id: 200, title: 'Number of Islands', difficulty: 'Medium' },
      { id: 695, title: 'Max Area of Island', difficulty: 'Medium' },
      { id: 133, title: 'Clone Graph', difficulty: 'Medium' },
      { id: 286, title: 'Walls and Gates', difficulty: 'Medium', slug: 'walls-and-gates' },
      { id: 994, title: 'Rotting Oranges', difficulty: 'Medium' },
      { id: 417, title: 'Pacific Atlantic Water Flow', difficulty: 'Medium' },
      { id: 130, title: 'Surrounded Regions', difficulty: 'Medium' },
      { id: 207, title: 'Course Schedule', difficulty: 'Medium' },
      { id: 210, title: 'Course Schedule II', difficulty: 'Medium' },
      { id: 261, title: 'Graph Valid Tree', difficulty: 'Medium', slug: 'graph-valid-tree' },
      { id: 323, title: 'Number of Connected Components in Undirected Graph', difficulty: 'Medium', slug: 'number-of-connected-components-in-an-undirected-graph' },
      { id: 684, title: 'Redundant Connection', difficulty: 'Medium' },
      { id: 127, title: 'Word Ladder', difficulty: 'Hard' },
    ],
  },
  {
    id: 'dp-1d',
    label: '1-D Dynamic Programming',
    x: 788, y: 600,
    problems: [
      { id: 70, title: 'Climbing Stairs', difficulty: 'Easy' },
      { id: 746, title: 'Min Cost Climbing Stairs', difficulty: 'Easy' },
      { id: 198, title: 'House Robber', difficulty: 'Medium' },
      { id: 213, title: 'House Robber II', difficulty: 'Medium' },
      { id: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium' },
      { id: 647, title: 'Palindromic Substrings', difficulty: 'Medium' },
      { id: 91, title: 'Decode Ways', difficulty: 'Medium' },
      { id: 322, title: 'Coin Change', difficulty: 'Medium' },
      { id: 152, title: 'Maximum Product Subarray', difficulty: 'Medium' },
      { id: 139, title: 'Word Break', difficulty: 'Medium' },
      { id: 300, title: 'Longest Increasing Subsequence', difficulty: 'Medium' },
      { id: 416, title: 'Partition Equal Subset Sum', difficulty: 'Medium' },
    ],
  },
  {
    id: 'advanced-graphs',
    label: 'Advanced Graphs',
    x: 394, y: 600,
    problems: [
      { id: 332, title: 'Reconstruct Itinerary', difficulty: 'Hard' },
      { id: 1584, title: 'Min Cost to Connect All Points', difficulty: 'Medium' },
      { id: 743, title: 'Network Delay Time', difficulty: 'Medium' },
      { id: 778, title: 'Swim in Rising Water', difficulty: 'Hard' },
      { id: 269, title: 'Alien Dictionary', difficulty: 'Hard', slug: 'alien-dictionary' },
      { id: 787, title: 'Cheapest Flights Within K Stops', difficulty: 'Medium' },
    ],
  },
  {
    id: 'dp-2d',
    label: '2-D Dynamic Programming',
    x: 591, y: 720,
    problems: [
      { id: 62, title: 'Unique Paths', difficulty: 'Medium' },
      { id: 1143, title: 'Longest Common Subsequence', difficulty: 'Medium' },
      { id: 309, title: 'Best Time to Buy and Sell Stock with Cooldown', difficulty: 'Medium' },
      { id: 518, title: 'Coin Change II', difficulty: 'Medium' },
      { id: 494, title: 'Target Sum', difficulty: 'Medium' },
      { id: 97, title: 'Interleaving String', difficulty: 'Medium' },
      { id: 329, title: 'Longest Increasing Path in a Matrix', difficulty: 'Hard' },
      { id: 115, title: 'Distinct Subsequences', difficulty: 'Hard' },
      { id: 72, title: 'Edit Distance', difficulty: 'Medium' },
      { id: 312, title: 'Burst Balloons', difficulty: 'Hard' },
      { id: 10, title: 'Regular Expression Matching', difficulty: 'Hard' },
    ],
  },
  {
    id: 'greedy',
    label: 'Greedy',
    x: 197, y: 600,
    problems: [
      { id: 53, title: 'Maximum Subarray', difficulty: 'Medium' },
      { id: 55, title: 'Jump Game', difficulty: 'Medium' },
      { id: 45, title: 'Jump Game II', difficulty: 'Medium' },
      { id: 134, title: 'Gas Station', difficulty: 'Medium' },
      { id: 846, title: 'Hand of Straights', difficulty: 'Medium' },
      { id: 1899, title: 'Merge Triplets to Form Target Triplet', difficulty: 'Medium' },
      { id: 763, title: 'Partition Labels', difficulty: 'Medium' },
      { id: 678, title: 'Valid Parenthesis String', difficulty: 'Medium' },
    ],
  },
  {
    id: 'intervals',
    label: 'Intervals',
    x: 0, y: 600,
    problems: [
      { id: 57, title: 'Insert Interval', difficulty: 'Medium' },
      { id: 56, title: 'Merge Intervals', difficulty: 'Medium' },
      { id: 435, title: 'Non-overlapping Intervals', difficulty: 'Medium' },
      { id: 252, title: 'Meeting Rooms', difficulty: 'Easy', slug: 'meeting-rooms' },
      { id: 253, title: 'Meeting Rooms II', difficulty: 'Medium', slug: 'meeting-rooms-ii' },
      { id: 1851, title: 'Minimum Interval to Include Each Query', difficulty: 'Hard' },
    ],
  },
  {
    id: 'math-geometry',
    label: 'Math & Geometry',
    x: 591, y: 840,
    problems: [
      { id: 48, title: 'Rotate Image', difficulty: 'Medium' },
      { id: 54, title: 'Spiral Matrix', difficulty: 'Medium' },
      { id: 73, title: 'Set Matrix Zeroes', difficulty: 'Medium' },
      { id: 202, title: 'Happy Number', difficulty: 'Easy' },
      { id: 66, title: 'Plus One', difficulty: 'Easy' },
      { id: 50, title: 'Pow(x, n)', difficulty: 'Medium', slug: 'powx-n' },
      { id: 43, title: 'Multiply Strings', difficulty: 'Medium' },
      { id: 149, title: 'Max Points on a Line', difficulty: 'Hard' },
    ],
  },
  {
    id: 'bit-manipulation',
    label: 'Bit Manipulation',
    x: 788, y: 720,
    problems: [
      { id: 136, title: 'Single Number', difficulty: 'Easy' },
      { id: 191, title: 'Number of 1 Bits', difficulty: 'Easy' },
      { id: 338, title: 'Counting Bits', difficulty: 'Easy' },
      { id: 190, title: 'Reverse Bits', difficulty: 'Easy' },
      { id: 268, title: 'Missing Number', difficulty: 'Easy' },
      { id: 371, title: 'Sum of Two Integers', difficulty: 'Medium' },
      { id: 7, title: 'Reverse Integer', difficulty: 'Medium' },
    ],
  },
];

export const edges: TopicEdge[] = [
  // Arrays & Hashing fans out to both row-1 nodes
  { from: 'arrays-hashing', to: 'two-pointers' },
  { from: 'arrays-hashing', to: 'stack' },
  // Two Pointers (left) → Linked List (left) + Sliding Window (center)
  // Stack (right) → Binary Search (right) + Sliding Window (center)
  // This avoids the crossing diagonal lines while keeping the logical dependencies
  { from: 'two-pointers', to: 'linked-list' },
  { from: 'two-pointers', to: 'sliding-window' },
  { from: 'stack', to: 'binary-search' },
  { from: 'stack', to: 'sliding-window' },
  // All row-2 nodes converge to Trees
  { from: 'binary-search', to: 'trees' },
  { from: 'sliding-window', to: 'trees' },
  { from: 'linked-list', to: 'trees' },
  // Trees fans out to left/center/right
  { from: 'trees', to: 'tries' },
  { from: 'trees', to: 'heap' },
  { from: 'trees', to: 'backtracking' },
  // Heap → left three of row-5
  { from: 'heap', to: 'intervals' },
  { from: 'heap', to: 'greedy' },
  { from: 'heap', to: 'advanced-graphs' },
  // Backtracking → right two of row-5
  { from: 'backtracking', to: 'graphs' },
  { from: 'backtracking', to: 'dp-1d' },
  // Row-5 right side → row-6
  { from: 'graphs', to: 'dp-2d' },
  { from: 'dp-1d', to: 'dp-2d' },
  { from: 'dp-1d', to: 'bit-manipulation' },
  // 2-D DP → Math & Geometry
  { from: 'dp-2d', to: 'math-geometry' },
];

export function toSlug(problem: Problem): string {
  if (problem.slug) return problem.slug;
  return problem.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
