<template>
  <ion-card>
    <ion-card-header :router-link="'/tabs/account/' + account.uid">
      <ion-card-title>{{ account.name }}</ion-card-title>
      <ion-card-subtitle>Lv. {{ account.level }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <id-copy :uid="account.uid" />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/vue';
import IdCopy from "@/components/IdCopy.vue";

export default  {
  name: 'AccountItem',
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IdCopy,
  },
  props: {
    account: {
      name: String,
      uid: String,
      level: Number,
    }
  }
}
</script>