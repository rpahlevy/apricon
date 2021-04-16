<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Edit Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Edit Account</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item-group>
        <ion-item-divider>
          <ion-label>Details</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label position="fixed">UID</ion-label>
          <ion-input enterkeyhint="next" inputmode="numeric" placeholder="User ID" required="true" autofocus="true" v-model="account.uid" readonly="true" />
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Name</ion-label>
          <ion-input enterkeyhint="next" inputmode="text" placeholder="User Name" required="true" v-model="account.name" />
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Level</ion-label>
          <ion-input enterkeyhint="next" inputmode="numeric" required="true" type="number" min="0" v-model="account.level" />
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Jewel</ion-label>
          <ion-input enterkeyhint="next" inputmode="numeric" required="true" type="number" min="0" v-model="account.jewel" />
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Mana</ion-label>
          <ion-input enterkeyhint="next" inputmode="numeric" required="true" type="number" min="0" v-model="account.mana" />
        </ion-item>
      </ion-item-group>

      <ion-item-group>
        <ion-item-divider>
          <ion-label>Progress</ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label position="fixed">Normal</ion-label>
          <ion-input enterkeyhint="next" inputmode="numeric" placeholder="Normal Quest" v-model="account.progress.normal" />
        </ion-item>
        <ion-item>
          <ion-label position="fixed">Hard</ion-label>
          <ion-input enterkeyhint="next" inputmode="numeric" placeholder="Hard Quest" v-model="account.progress.hard" />
        </ion-item>
      </ion-item-group>

      <ion-button expand="block" fill="outline" color="primary" class="ion-margin-top" @click="editAccount()">
        Save
      </ion-button>
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
  IonItemGroup,
  IonItemDivider,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  loadingController,
  toastController,
} from '@ionic/vue';
import { useRoute } from "vue-router"
import { defineComponent } from 'vue'
import { db } from '@/db/firebase'
import router from "@/router"

export default defineComponent({
  name: 'TabAccountEdit',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItemGroup,
    IonItemDivider,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
    return {
      account: {
        uid: '',
        name: '',
        level: 0,
        jewel: 0,
        mana: 0,
        progress: {
          normal: '',
          hard: ''
        },
      } as any,
      loading: undefined as any
    }
  },
  beforeUpdate() {
    const route = useRoute()
    const uid = route.params.uid as string
    if (uid) {
      this.loadAccount(uid)
    }
  },
  methods: {
    async showLoading(timeout=0) {
      if (!this.loading) {
        this.loading = await loadingController
          .create({
            message: 'Loading...',
          })
      }
      await this.loading.present()
      if (timeout > 0) {
        setTimeout(() => {
          this.hideLoading()
        }, timeout)
      }
    },
    hideLoading() {
      if (this.loading) {
        this.loading.dismiss()
      }
    },
    async loadAccount(uid: string) {
      // update data in background if we have fetched before
      let needLoading = true
      if (this.account) {
        if (this.account.uid === uid) {
          needLoading = false
        } else {
          this.resetForm()
        }
      }
      if (needLoading) {
        this.showLoading(1000)
      }
      const accountRef = db.collection('accounts').doc(uid)
      const account = await accountRef.get()
      if (account.exists) {
        const data = account.data()
        // we sure data wont be null inside this if-condition, hence `data!`
        // eslint-disable-next-line
        data!.uid = account.id
        this.account = data        
      } else {
        console.log('data nonexistent')
      }

      this.hideLoading()
    },
    async editAccount() {
      const data = {
        name: this.account.name,
        level: this.account.level,
        jewel: this.account.jewel,
        mana: this.account.mana,
        progress: {
          normal: this.account.progress.normal,
          hard: this.account.progress.hard,
        }
      }
      const option = {
        merge: true,
      }
      // save to firebase
      await db.collection('accounts').doc(this.account.uid).set(data, option)
      // show toast
      const toast = await toastController
        .create({
          message: 'Account saved',
          duration: 1000
        })
      toast.present()
      // redirect
      router.replace('/tabs/account/' + this.account.uid)
    },
    resetForm() {
      this.account.uid = ''
      this.account.name = ''
      this.account.level = 0
      this.account.jewel = 0
      this.account.mana = 0
      this.account.progress.normal = ''
      this.account.progress.hard = ''
    }
  }
})
</script>