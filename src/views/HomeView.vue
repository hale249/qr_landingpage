<script setup lang="ts">
import XacThuc from "@/components/layouts/theme1/XacThuc.vue";
</script>

<template>
<div>
  <Suspense>
    <template #default>
      <XacThuc/>
    </template>
    <template #fallback>
      <a-skeleton />
    </template>
  </Suspense>
</div>
</template>
