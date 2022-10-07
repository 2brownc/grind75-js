function productExceptSelf(nums) {
  const answer = [];
  answer.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
    console.log("s1 iter", answer[i - 1], nums[i - 1], answer[i - 1] * nums[i - 1]);
  }

  console.log("S1", answer);

  const s2 = [1];
  for (
    let i = nums.length - 2, k = 1;
    i >= 0;
    i--
  ) {
    k = k * nums[i + 1];
    s2.push(k);
    answer[i] = answer[i] * k;
  }

  console.log("s2", s2.reverse());

  return answer;
}

export { productExceptSelf };