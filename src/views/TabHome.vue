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
import { defineComponent } from 'vue'
import { IonPage, IonContent, loadingController } from '@ionic/vue'
import AccountItem from '@/components/AccountItem.vue'
import { db } from '@/db/firebase'

export default defineComponent({
  name: 'TabHome',
  components: {
    IonContent,
    IonPage,
    AccountItem
  },
  // setup() {
  //   return {
  //     accounts
  //   }
  // },
  data() {
    return {
      accounts: [] as any[],
      loading: undefined as any
    }
  },
  // props: {
  //   accounts: Array
  // },
  created() {
    this.showLoading(1000)
    db.collection('accounts').orderBy('name').onSnapshot((snapshotChange) => {
      this.accounts = []
      snapshotChange.forEach((doc) => {
        const data = doc.data()
        data.uid = doc.id
        this.accounts.push(data)
      })
      this.hideLoading()
    })
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
    }
  }
})
</script>