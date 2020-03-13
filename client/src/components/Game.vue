<template>
  <div>
    Review game
    {{ username }}
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: ['username'],
};
</script>

<style lang="scss" scoped></style>
