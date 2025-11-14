class Solution {
    func merge(_ nums1: inout [Int], _ m: Int, _ nums2: [Int], _ n: Int) {
        var merged = Array(nums1.prefix(m) + nums2.prefix(n))
        nums1 = merged.sorted()
    }
}

