import {Button, Input, Form, Card, Skeleton, ConfigProvider} from "ant-design-vue";
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css';

import "./assets/style/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

import 'ant-design-vue/dist/antd.css';

// Cấu hình theme
const theme = {
    primaryColor: '#52c41a',
    successColor: '#52c41a',
    warningColor: '#faad14',
    errorColor: '#f5222d'
};

ConfigProvider.config({
    theme
});
const app = createApp(App);

app.use(router);
app.use(i18n);

app.use(Button);
app.use(Input);
app.use(Form);
app.use(Card);
app.use(Skeleton);
app.use(ConfigProvider)
app.use(createPinia());

app.mount("#app");

