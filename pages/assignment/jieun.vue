<template>
  <div>
  </div>
</template>

<script lang="js" setup>
// ================================ 1 ================================
let gugudanList = '<ul>';

[2, 3, 4, 5, 6, 7, 8, 9].forEach(i => {
  gugudanList += '<li>';
  [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function (j) {
    const result = i * j;
    gugudanList += `<p>${i} x ${j} = ${result}</p>`;
  });
  gugudanList += '</li>';
});

gugudanList += '</ul>';
document.body.innerHTML = gugudanList;

// ================================ 2 ================================
const before = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const after = before.map(num => 11 - num);

console.log(`2번 : ${before}를 거꾸로 나열하면 ${after}`);

// ================================ 3 ================================
let arr = [123, 4, 3, 5, 6]
let result = arr.reduce((acc, num) => acc * num, 1);

console.log(`3번 : ${arr} 을 모두 곱한 값은 ${result}`);
</script>