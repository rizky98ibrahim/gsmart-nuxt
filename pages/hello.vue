<template>
  <h1>tester</h1>
  <img src="~/assets/img/bg-material.png" height="100" width="150" />
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
  },
});
</script>
