<script setup lang="ts">
import ProductLayout from "@/components/layouts/theme1/ProductLayout.vue";
import axiosInstance from "@/plugins/axios";
import {useRoute, useRouter} from "vue-router";
import {reactive, ref} from "vue";
import type {ILangPageProduct} from "@/type";

const {params} = useRoute()

const productId = params.id || '';
const isProduct = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const router = useRouter();

let product = reactive<ILangPageProduct>({
  product: {
    id: '',
    name:  '',
    code:  '',
    price: '',
    slug: '',
    note: '',
    image: '',
    images: [],
    packing: '',
    dosage: '',
  },

  suggests: [],
});

try {
  isLoading.value = true;
  const response = await axiosInstance.get(`/api/landing-page/product/${productId}`);
  if (response.code !== 200) {
    router.push('/error');
  }
  product = response.data;
  isProduct.value = true;
} catch (error) {
  console.log('ERROR', error);
  isProduct.value = false;
  router.push('/error');
} finally {
  isLoading.value = false;
}

</script>

<template>
  <template v-if="isLoading">
    <div class="max-w-md m-auto overflow-hidden min-h-screen">
      <a-skeleton />
    </div>
  </template>
  <template v-if="!isLoading">
    <ProductLayout style-item-slide="mb-4" :is-icon-back-item-slide="true" :is-product="true" :product="product"/>
  </template>
</template>
