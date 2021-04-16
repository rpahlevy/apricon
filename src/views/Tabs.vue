<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="idCardOutline" />
        </ion-tab-button>

        <ion-tab-button tab="add"></ion-tab-button>
        
        <ion-tab-button tab="settings" href="/tabs/settings">
          <ion-icon :icon="settingsOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

    <ion-fab vertical="bottom" horizontal="center" slot="fixed" edge="false">
      <ion-fab-button tab="add" router-link="/tabs/add">
        <ion-icon :icon="addOutline" />
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script lang="ts">
import {
  IonFab,
  IonFabButton,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonPage,
} from '@ionic/vue';
import {
  addOutline,
  settingsOutline,
  idCardOutline,
} from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: {
    IonFab,
    IonFabButton,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
  },
  setup() {
    return {
      addOutline,
      settingsOutline,
      idCardOutline,
    }
  }
}
</script>