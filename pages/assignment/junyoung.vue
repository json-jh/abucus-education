<template>
  <div>
    <!-- 1번 -->
    <div>forEach()를 사용하여 구구단 출력하세요.</div>
    <!-- 2번 -->
    <div>map() 을 통해 [1,2,3,4,5,6,7,8,9,10] 배열을 역순으로 수정하세요.</div>
    <div>before: {{ before }}</div>
    <div>after: {{ after }}</div>
    <!-- 3번 -->
    <div>reduce() 를 사용해서 [123,4,3,5,6] 배열의 값을 모두 곱하세요.</div>
    <div>result => {{ arrayMultiplication }}</div>
  </div>
</template>

<script lang="js" setup>
// ================================ 1 ================================
function multiplication(number) {
  console.log(`${number} 단`)
  const multiplicationTable = []

  for (let i = 1; i <= 9; i++)
    multiplicationTable.push(`${number} X ${i} = ${number * i}`)

  multiplicationTable.forEach((result) => {
    console.log(result)
  })
}

for (let i = 2; i <= 9; i++)
  multiplication(i)

// ================================ 2 ================================
const before = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const after = [...before].reverse().map(num => num)

// ================================ 3 ================================
const reduceArray = [123, 4, 3, 5, 6]

const arrayMultiplication = reduceArray.reduce((accumulator, currentValue) => {
  return accumulator * currentValue
}, 1)
</script>