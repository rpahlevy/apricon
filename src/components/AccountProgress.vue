<template>
  <ion-card v-if="progress">
    <ion-card-header>
      <ion-card-title>Progress</ion-card-title>
    </ion-card-header>
    <ion-card-content class="ion-no-padding">
      <ion-list>
        <ion-item>
          <ion-label>Normal</ion-label>
          <ion-note slot="end" mode="ios">{{ progress.normal }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Hard</ion-label>
          <ion-note slot="end" mode="ios">{{ progress.hard }}</ion-note>
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
  IonNote
} from "@ionic/vue";

export default {
  name: "AccountProgress",
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote
  },
  props: {
    progress: {
      normal: String,
      hard: String,
    }
  }
};
</script>