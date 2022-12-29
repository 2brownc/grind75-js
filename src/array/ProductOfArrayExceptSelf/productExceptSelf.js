function productExceptSelf(nums) {
  const answer = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = postfix;
    postfix *= nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] *= prefix;
    prefix *= nums[i];
  }

  console.log("ans", answer);


  return answer;
}

export { productExceptSelf };