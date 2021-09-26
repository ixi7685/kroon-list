import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import BaseCard from './UI/BaseCard.vue';
import BaseButton from './UI/BaseButton.vue';
import BaseModal from './UI/BaseModal.vue';
import App from './App.vue';
import Base from './list/Base.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/pagination' },
    {
      path: '/pagination',
      name: 'Base',
      component: Base
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-modal', BaseModal);

app.use(router);

app.mount('#app');
