<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        Details
      </ion-card-title>
    </ion-card-header>
    <ion-card-content class="ion-no-padding">
      <ion-list>
        <ion-item>
          <ion-label>Jewel</ion-label>
          <ion-note slot="end" mode="ios" color="tertiary">{{ formatNumber(account.jewel) }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Mana</ion-label>
          <ion-note slot="end" mode="ios" color="success">{{ formatNumber(account.mana) }}</ion-note>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
} from '@ionic/vue'

export default {
  name: 'AccountDetails',
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
  },
  props: {
    account: {
      jewel: Number,
      mana: Number,
    }
  },
  methods: {
    formatNumber(num: number) {
      return new Intl.NumberFormat().format(num)
    }
  }
}
</script>