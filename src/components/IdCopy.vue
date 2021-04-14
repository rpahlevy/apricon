<template>
  <ion-grid class="ion-no-padding">
    <ion-row class="ion-no-padding">
      <ion-col class="ion-float-left">
        {{ uid }} 
      </ion-col>
      <ion-col class="ion-float-right ion-text-right" @click="copyId(uid)">
        <ion-icon :icon="copyIcon" />
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  toastController,
} from '@ionic/vue';
import { copy as copyIcon } from 'ionicons/icons';
import copy from 'copy-to-clipboard';

export default {
  name: 'IdCopy',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  },
  setup() {
    return {
      copy,
      copyIcon,
    }
  },
  props: {
    uid: String,
  },
  methods: {
    async copyId(uid: string) {
      copy(uid)
      const toast = await toastController
        .create({
          message: 'UID copied',
          duration: 1000
        })
      return toast.present();
    }
  }
}
</script>