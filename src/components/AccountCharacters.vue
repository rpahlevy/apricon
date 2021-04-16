<template>
  <ion-card v-if="characters">
    <ion-card-header>
      <ion-card-title>
        Characters
        <ion-badge>{{ characters.length }}</ion-badge>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content class="ion-no-padding">
      <ion-list>
        <ion-item v-for="character in characters" :key="character.name">
          <ion-label>{{ character.name }}</ion-label>
          <ion-note slot="end" mode="ios">
            {{ character.star }}*
            ({{ character.rarity }})
          </ion-note>
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
  IonBadge,
} from "@ionic/vue";

export default {
  name: "AccountCharacters",
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonBadge,
  },
  props: {
    characters: Array
  }
};
</script>