<script setup lang="ts">
import type {PropType} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import type {IProduct} from "@/type";
import ProductItem from '@/components/products/ProductItem.vue';

defineProps({
  products: {
    type: Object as PropType<Array<IProduct>>,
    required: true,
  },
})
</script>

<template>
  <div class="px-4">
    <div class="font-bold text-[16px] leading-5">Sản phẩm liên quan</div>

    <swiper
        :slidesPerView="2.5"
        :spaceBetween="30"
        :pagination="{
              clickable: true,
            }"
        :breakpoints="{
              576: {
                width: 576,
                slidesPerView: 3.5,
                },

            }"
        :modules="[Pagination]"
        class="product-relate"
    >
      <swiper-slide v-for="(item, index) in products" :key="index">
        <RouterLink :to="`/product/${item.id}`">
          <ProductItem :product="item"/>
        </RouterLink>
      </swiper-slide>
    </swiper>
  </div>
</template>
