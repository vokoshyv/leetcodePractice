class Solution {
    public long pickGifts(int[] gifts, int k) {
        PriorityQueue<Integer> queue = new PriorityQueue(Collections.reverseOrder());

        for (int i = 0; i < gifts.length; i++) {
            queue.add(gifts[i]);
        }

        // System.out.println(queue);

        while (k-- > 0) {
            int largest = queue.poll();
            int remainder = (int) Math.floor(Math.sqrt(largest));
            queue.add(remainder);
            // System.out.println(queue);
        }

        int result = 0;

        System.out.println(queue);

        while (queue.size() > 0) {
            result += queue.poll();
        }

        return result;
    }
}