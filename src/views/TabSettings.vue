<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings (WIP)</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings (WIP)</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-list>
        <ion-item>
          <ion-label>Theme</ion-label>
          <ion-select interface="popover" v-model="theme">
            <ion-select-option value="auto">Auto</ion-select-option>
            <ion-select-option value="light">Light</ion-select-option>
            <ion-select-option value="dark">Dark</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return {
      theme: 'auto'
    }
  }
}
</script>