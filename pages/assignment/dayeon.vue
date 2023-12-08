<template>
  <div>
    <h3>과제를 해보아요 :D</h3>
    <hr>
    <div>
      <h4>1. forEach함수를 사용해 구구단 출력</h4>
      <p>{{ gugu }}</p>
      <p style="font-size: 12px; color: gray">
        저는 원래 값이 {{ originalGugu }}인데용, <br>
        forEach 함수 적용 전 값을 가져오려면 따로 선언해주어야 합니다.
      </p>
    </div>
    <div>
      <h4>2. map를 통한 배열 수정 [1,2,3,4,5,6,7,8,9,10] > [10,9,,7,6,5,4,3,2,1]</h4>
      <p>{{ arr }}를 뒤집으면 {{ reverseArr }}</p>
    </div>
    <div>
      <h4>3. reduce 함수를 사용한 각 배열 곱</h4>
      <p>{{ arr2 }}를 곱하면 {{ result }}이 됩니다.</p>
    </div>
  </div>
</template>

<script lang="js" setup>
// 과제
// 1. forEach함수를 사용해서 구구단을 출력
const gugu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const originalGugu = [...gugu];

gugu.forEach(function (num, index, guguArray) {
  // console.log('num', num)          // 현재 반복되는 값
  // console.log('index', index)      // 현재 index
  // console.log(guguArray)           // const gugu의 배열 전체
  guguArray[index] = num * 3
})

// 2. map를 통해 다음 배열을 수정하세요
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArr = arr.map(function (num) {
  return 11 - num;
})

// 3. reduce 함수를 사용해서 다음 배열안의 값을 모두 곱하시오.
// [123, 4, 3, 5, 6]
const arr2 = [123, 4, 3, 5, 6]

const result = arr2.reduce((prev, curr) => {
  // console.log('prev', prev)
  // console.log(prev * curr)
  return prev * curr
});

// map과 reduce는 기본배열을 변경시키지 않고 새배열을 반환하여 다시 선언 ! 
</script>