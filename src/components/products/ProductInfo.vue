<script setup lang="ts">
import {computed} from "vue";
import type {PropType} from "vue";
import {useSettingStore} from "@/store";
// import {_priceProduct} from "@/utils";

const props = defineProps({
  product: {
    type: Object as PropType<any>,
    required: true,
  },
})

const settingStore = useSettingStore();
const setting = computed(() => settingStore.setting);

// const formatProductPrice = computed(() => _priceProduct(props.product, setting?.value?.currency));
const formatProductPrice = '';
</script>

<template>
  <div class="bg-white mb-4 p-4">
    <div class="header text-[#F38020] text-[16px] font-bold border-b border-[#D9E6E9] py-3">
      Thông tin sản phẩm
    </div>

    <div class="product-detail">
      <div class="font-bold text-[#14272B] mt-3">Thông tin chi tiết</div>

      <div class="border-b border-[#D9E6E9] py-3">
        <dl>
          <div class="grid grid-cols-12 gap-4 mb-2">
            <div class="col-span-5">Tên sản phẩm</div>
            <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ product.name }}</div>
          </div>

          <div class="grid grid-cols-12 gap-4 mb-2">
            <div class="col-span-5">Nguồn gốc</div>
            <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ product?.brand?.name || 'Việt Nam'}}</div>
          </div>

          <div class="grid grid-cols-12 gap-4 mb-2">
            <div class="col-span-5">Giá bán</div>
            <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ formatProductPrice }}</div>
          </div>

          <div class="grid grid-cols-12 gap-4 mb-2">
            <div class="col-span-5">Liều dùng</div>
            <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ product?.dosage || '' }}</div>
          </div>

          <div class="grid grid-cols-12 gap-4 mb-2">
            <div class="col-span-5">Quy cách đóng gói</div>
            <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ product?.packing || '' }}</div>
          </div>
        </dl>
      </div>

      <div v-if="product.note" class="product-description" v-html="product.note"></div>
    </div>
  </div>
</template>
