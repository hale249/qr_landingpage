<script setup lang="ts">
import {computed, PropType} from "vue";
import {useSettingStore} from "@/store";

const props = defineProps({
  product: {
    type: Object as PropType<any>,
    required: true
  },
})

const slideStr = (str: string) => {
  if (!str) {
    return '';
  }

  return str.slice(0, 38) + '...';
}

const settingStore = useSettingStore();
const setting = computed(() => settingStore.setting);

const formatProductPrice = computed(() => _priceProduct(props.product, setting?.value?.currency));
</script>

<template>
  <div class="bg-white rounded-2xl relative h-[189px] w-[140px] min-w-[140px] border flex flex-col-reverse justify-between">
    <div class="absolute w-[88px] h-[88px] bg-cover bg-no-repeat bg-center" :style="{
                left: 'calc(50% - 88px/2)',
                top: '24px',
              }">
      <img :src="`${product.image}`" :alt="product.name" />
    </div>
    <div class="text-right px-1 mb-2">
      <div class="mt-3 text-[12px]">{{ slideStr(product.name) }}</div>
      <div class="mt-2 font-medium text-[14px]">{{ formatProductPrice }}</div>
    </div>
  </div>
</template>
