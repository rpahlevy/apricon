<template>
  <ion-grid class="ion-no-padding ion-activatable" @click="copyId(uid)">
    <ion-row class="ion-no-padding">
      <ion-col class="ion-float-left">
        <ion-label>
          {{ formatNumber(uid) }}
        </ion-label>
      </ion-col>
      <ion-col class="ion-float-right ion-text-right">
          <ion-icon :icon="copyOutline" />
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonIcon,
  toastController,
} from '@ionic/vue';
import { copyOutline } from 'ionicons/icons';
import copy from 'copy-to-clipboard';

export default {
  name: 'IdCopy',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonIcon,
  },
  setup() {
    return {
      copy,
      copyOutline,
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
      return toast.present()
    },
    formatNumber(num: number) {
      return new Intl.NumberFormat().format(num)
    }
  }
}
</script>