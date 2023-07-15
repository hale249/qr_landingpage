<script setup lang="ts">
import type {ICustomer, IProduct} from "@/type";
import {useSettingStore} from "@/store";
import {_priceProduct} from "@/utils";
import {computed, PropType} from "vue";

const props = defineProps({
  customer: {
    type: Object as PropType<ICustomer>,
    required: true,
  },

  product: {
    type: Object as PropType<IProduct>,
    required: true,
  },
})

const settingStore = useSettingStore();
const setting = computed(() => settingStore.setting);

const formatProductPrice = computed(() => _priceProduct(props.product, setting?.value?.currency));
</script>

<template>
  <div class="bg-white mb-4 p-4">
    <div class="header text-[#F38020] text-[16px] font-bold border-b border-[#D9E6E9] py-3">
      Thông tin xác thực
    </div>

    <div class="customer-profile">
      <div class="py-3">
        <div class="grid grid-cols-12 gap-4 mb-2">
          <div class="col-span-5">Họ và tên</div>
          <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ customer.client_name }}
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4 mb-2">
          <div class="col-span-5">SĐT</div>
          <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ customer.client_phone }}</div>
        </div>

        <div class="grid grid-cols-12 gap-4 mb-2">
          <div class="col-span-5">Giá bán</div>
          <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ formatProductPrice }}</div>
        </div>

        <div class="grid grid-cols-12 gap-4 mb-2">
          <div class="col-span-5">Serial</div>
          <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ customer.series_no }}
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4 mb-2">
          <div class="col-span-5">Xác thực ngày</div>
          <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ customer.activate_at }}</div>
        </div>

        <div class="grid grid-cols-12 gap-4 mb-2">
          <div class="col-span-5">Đại lý bán</div>
          <div class="col-span-7 text-right text-[#4B6166] font-semibold">{{ customer.agency_name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
