<script setup lang="ts">
import ProductLayout from "@/components/layouts/theme1/ProductLayout.vue";
import VerifyStatus from "@/components/commons/VerifyStatus.vue";
import FormVerify from "@/components/commons/FormVerify.vue";
import Info from "@/components/customers/Info.vue";
import axiosInstance from "@/plugins/axios";
import {useRoute, useRouter} from "vue-router";
import {reactive, ref} from "vue";
import {cloneDeep} from "@/utils";
import type {ICustomer, ILangPageProduct} from "@/type";
const {query} = useRoute();
const router = useRouter();

const productId = query?.pid || '';
const statusRef = ref<string>('');
const isProduct = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const defaultProduct = {
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
}

const defaultCustomer = {
  series_no: '',
  serial_code: '',
  status: '',
  activate_at: '',
  agency_name: '',
  agency_phone: '',
  client_name: '',
  client_phone: '',
}

let lpProduct = reactive<ILangPageProduct>(cloneDeep(defaultProduct));
const customerState = reactive<{customer: ICustomer}>({
  customer: cloneDeep(defaultCustomer)
})

if (productId) {
  try {
    isLoading.value = true;
    const response = await axiosInstance.get(`/api/landing-page/product/${productId}`);
    lpProduct = response.data;
    isProduct.value = true;
  } catch (error) {
    console.log('ERROR', error);
    isProduct.value = false;
  } finally {
    isLoading.value = false;
  }
}

const handleEventSubmit = async (event: any) => {
  try {
    const response = await axiosInstance.post('/api/landing-page/verify-code', {
      code: event?.code?.trim() || '',
      name: event?.name?.trim() || '',
      phone_number: event?.phone_number?.trim() || '',
    })

    console.log('Response handleEventSubmit', response);
    if (response.code !== 200) {
      if (!isProduct.value) {
        await router.push('/error');
        return;
      }

      statusRef.value = 'fail';
      return;
    }

    const isActivated = response?.data?.meta?.activated || false;

    let res = response?.data || {};
    if (isActivated) {
      res = response?.data.data || {};
    }

    if (!isProduct.value) {
      lpProduct = res?.product;
      isProduct.value = true;
    }

    customerState.customer = res?.customer || {};
    if (isActivated) {
      statusRef.value = 'warning';
      return;
    }

    customerState.customer.client_name = event.name
    statusRef.value = 'success';
  } catch (e) {
    console.log('ERROR response', e);
    if (!isProduct.value) {
      router.push('/error');
      return;
    }

    statusRef.value = 'fail';
  }
}
</script>

<template>
  <template v-if="isLoading">
    <div class="max-w-md m-auto overflow-hidden min-h-screen">
      <a-skeleton />
    </div>
  </template>
  <template v-if="!isLoading">
    <ProductLayout :product="lpProduct" :class-name="!isProduct ? 'flex flex-col justify-between' : ''" :is-product="isProduct">
      <div class="flex justify-center py-4 bg-white" v-if="!isProduct">
        <img src="@/assets/logo.png" class="w-[140px] h-[140px]" alt="Logo">
      </div>

      <div class="bg-[#00994D] text-[16px] leading-5 p-4 text-white font-medium" v-if="!statusRef">
        Xác thực sản phẩm
      </div>

      <template v-if="isProduct">
        <VerifyStatus v-if="statusRef" :status="statusRef"/>
        <div class="bg-white mb-4 p-4" v-if="!statusRef">
          <h2 class="text-[20px] font-bold leading-6 text-[#233438]">
            {{lpProduct?.product?.name || '' }}
            <span v-if="lpProduct?.product?.packing">({{ lpProduct?.product?.packing || ''}})</span>
          </h2>
          <div class="text-[10px]"><span class="text-[#B61212]">Lưu ý:</span> Nhập chính xác thông tin họ tên, SĐT để đảm
            bảo các quyền lợi về tích điểm, đổi quà và các vấn đề xác thực, khiếu nại liên quan.
          </div>

          <FormVerify @form-submit="handleEventSubmit"/>
        </div>

        <Info v-if="statusRef === 'success' && customerState.customer" :product="lpProduct.product" :customer="customerState.customer" />
      </template>

      <template v-else>
        <div class="bg-white mb-4 p-4">
          <FormVerify @form-submit="handleEventSubmit"/>
        </div>
      </template>
    </ProductLayout>
  </template>
</template>
