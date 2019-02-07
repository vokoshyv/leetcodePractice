/*
Write code to parse urls into a sitemap tree structure and display it
as text. For example, the following urls will result in this printed
structure.

Milestones:
1. Parse routes into data structure
2. Print data structure as simply as possible to check parsing
3. Format text output like shown in below

String[] input = {
"/home/anti-depressants/xanax",
"/home/heart/lipitor",
"/home/heart/atorvastatin",
"/home/heart/lipitor",
"/home/heart/heart",
"/drugs/nasal/flonase",
"/drugs/topical",
"/drugs/routes/oral/tablets",
"/drugs/routes/nasal/flonase"
};

- home
- anti-depressants
- xanax
- heart
- lipitor
- atorvastatin
- heart
- drugs
- nasal
- flonase
- topical
- routes
- oral
- tablets
- nasal
- flonase
*/

/*
id -              String  - the id of the node
childrenMap -     Map     - used to see in constant time whether a child exists for
                            a particular node, and then grabbing the actual node
                            if it does indeed exist.
orderedChildren - Array   - array containing actual child nodes in the order in
                            which they were inserted; used to maintain order

*/
class Node {
  constructor(id) {
    this.id = id;
    this.childrenMap = new Map();
    this.orderedChildren = [];
  }
}

/*
I'm going to make a couple of assumptions concerning the array of URLs that
we receive for this problem:

- We'll only have `/` and characters a-z within URLs; no
  odd characters that require filtering
*/

function parseURLs(arr) {
  let root = new Node(null);

  for (let i = 0; i < arr.length; i++) {
    insertPath(root, arr[i]);
  }

  // console.log(JSON.stringify(root, null, 2));

  let result = grabDFS(root);

  return result;
}

function insertPath(root, str) {
  let url = str.split('/');
  let current = root;

  for (let i = 1; i < url.length; i++) {
    let item = url[i];
    if (current.childrenMap.has(item)) {
      current = current.childrenMap.get(item);
    } else {
      let newNode = new Node(item);
      current.childrenMap.set(item, newNode);
      current.orderedChildren.push(newNode);
      current = newNode;
    }
  }
}

function grabDFS(root) {
  let result = [];

  function traverse(current) {
    result.push(current.id);

    for (let i = 0; i < current.orderedChildren.length; i++) {
      traverse(current.orderedChildren[i]);
    }
  }
  traverse(root);

  // gotta remove the null at the beginning since the root node
  // has a null as its ID
  result.shift();

  return result;
}


let test = [
"/home/anti-depressants/xanax",
"/home/heart/lipitor",
"/home/heart/atorvastatin",
"/home/heart/lipitor",
"/home/heart/heart",
"/drugs/nasal/flonase",
"/drugs/topical",
"/drugs/routes/oral/tablets",
"/drugs/routes/nasal/flonase"
];

console.log(parseURLs(test));
