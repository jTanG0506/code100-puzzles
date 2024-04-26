## Linked List

You will receive an array with nodes of a linked list and the ID of the top node as seen below.

- The property next points to the ID of the next node
- The last node has the value null for next
- The property top points to the ID of the first node

Submit as solution an array of the values in the order that they appear in the linked list.

### Example puzzle

```
{
  "linkedList": [
    { "id": "b", "value": 2, "next": "c" },
    { "id": "c", "value": 3, "next": null },
    { "id": "a", "value": 1, "next": "b" }
  ],
  "top": "a"
}
```

### Example solution

```
[1, 2, 3]
```

### URL

https://puzzles.code100.dev/2023-puzzles/challenge-3/
