<script setup lang="ts">
import {reactive, ref} from 'vue';
import {useI18n} from "vue-i18n";
import type {IFormVerifyRequest} from "@/type";
import {maxLengthRule, phoneNumberRules, requiredRule} from "@/utils";

const { t: $t } = useI18n();

const formState = reactive<IFormVerifyRequest>({
  name: '',
  phone_number: '',
  code: '',
});

const rules = reactive({
  code: [
    requiredRule($t("barcode.code"), "change"),
    maxLengthRule($t("barcode.code"), 256, "change")
  ],
  name: [requiredRule($t("customer.name"), "change"),
    maxLengthRule($t("customer.name"), 256, "change")
  ],
  phone_number: [...phoneNumberRules("change")],
});

const emit = defineEmits(["formSubmit"]);
const isSubmit = ref<boolean>(false);

const onFinish = (async (values) => {
  isSubmit.value = true;
  emit("formSubmit", values);
});
</script>

<template>
  <a-form
      :model="formState"
      :rules="rules"
      @finish="onFinish"
  >
    <a-form-item
        name="code"
    >
      <a-input autofocus v-model:value="formState.code" :placeholder="$t('placeholder_code')" />
    </a-form-item>

    <a-form-item
        name="name"
    >
      <a-input v-model:value="formState.name" :placeholder="$t('placeholder_name')" />
    </a-form-item>

    <a-form-item
        name="phone_number"
    >
      <a-input v-model:value="formState.phone_number" :placeholder="$t('placeholder_phone_number')" />
    </a-form-item>

    <a-form-item>
      <a-button class="w-full" type="primary" html-type="submit">{{ $t('button.verify') }}</a-button>
    </a-form-item>
  </a-form>
</template>
