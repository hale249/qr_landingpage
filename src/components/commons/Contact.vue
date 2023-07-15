<script setup lang="ts">
import {computed} from "vue";
import {useSettingStore} from "@/store";

const settingStore = useSettingStore();
const setting = computed(() => settingStore.setting);
</script>

<template>
  <div class="p-4">
    <div class="font-medium">Mọi thắc mắc gửi về</div>
    <div class="text-[#14272B]">{{ setting?.company_phone || ""  }}</div>
    <div class="text-[#14272B]">{{ setting?.email || "" }}</div>
  </div>
</template>
