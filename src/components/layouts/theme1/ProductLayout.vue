<script setup lang="ts">
import {computed, PropType} from "vue";
import Contact from "@/components/commons/Contact.vue";
import ProductSlide from "@/components/products/ProductSlide.vue";
import ProductInfo from "@/components/products/ProductInfo.vue";
import SocialChannel from "@/components/commons/SocialChannel.vue";
import ProductSuggest from "@/components/products/ProductSuggest.vue";
import {useSettingStore} from "@/store";
import type {ILangPageProduct} from "@/type";

defineProps({
  styleItemSlide: {
    type: String,
    required: false,
    default: '',
  },

  isIconBackItemSlide: {
    type: Boolean,
    required: false,
    default: false,
  },

  className: {
    type: String,
    required: false,
    default: '',
  },
  isProduct: {
    type: Boolean,
    required: false,
    default: true,
  },

  product: {
    type: Object as PropType<ILangPageProduct>,
    required: false,
  }
})

const settingStore = useSettingStore();
const setting = computed(() => settingStore.setting);
</script>

<template>
  <div class="max-w-md m-auto overflow-hidden min-h-screen" :class="className">
    <template v-if="isProduct">
      <ProductSlide :class-name="styleItemSlide" :is-icon-back="isIconBackItemSlide"
                    :images="product?.product.images || []" :product_name="product?.product?.name || ''"/>
      <slot/>
      <ProductInfo v-if="product?.product" :product="product.product"/>
      <SocialChannel :setting="setting"/>
      <ProductSuggest v-if="product?.suggests.length > 0" :products="product?.suggests || []"/>
    </template>

    <template v-else>
      <div>
        <slot/>
      </div>
    </template>

    <Contact />
  </div>
</template>
