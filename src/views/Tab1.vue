<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <account-item
        v-for="account in accounts"
        :key="account.uid"
        :account="account" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import AccountItem from '@/components/AccountItem.vue';
import accounts from '@/components/json/accounts.json';

export default  {
  name: 'Tab1',
  components: {
    IonContent,
    IonPage,
    AccountItem
  },
  setup() {
    return {
      accounts
    }
  },
  // data() {
  //   return {
  //     accounts: accounts
  //   }
  // }
}
</script>