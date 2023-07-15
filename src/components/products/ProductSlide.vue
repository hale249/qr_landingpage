<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Pagination} from "swiper";

defineProps({
  className: {
    type: String,
    required: false,
    default: '',
  },

  isIconBack: {
    type: Boolean,
    required: false,
    default: false
  },

  images: {
    type: Array<string>,
    required: true,
    default: () => [],
  },

  product_name: {
    type: String,
    required: true,
    default: '',
  }
})

const {back} = useRouter();
</script>

<template>
  <div class="bg-white p-4 relative z-1000" :class="className">
    <div v-if="isIconBack" class="absolute top-4 left-4 cursor-pointer z-[100]" @click="back">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8L12 16L20 24" stroke="#00994D" stroke-width="2.66667" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
    </div>
    <swiper class="product-item-slide z-[1]"
            :pagination="true"
            :modules="[Autoplay, Pagination]"
            :autoplay="{
            delay: 25000,
            disableOnInteraction: false,
          }"
    >
      <swiper-slide v-for="(imgURL, index) in images" :key="index">
        <div class="h-[171px]"><img :src="imgURL" :alt="`${product_name} ${index}`"/></div>
      </swiper-slide>
    </swiper>
  </div>
</template>
