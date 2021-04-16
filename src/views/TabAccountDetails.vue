<template>
  <ion-page>
    <ion-content id="tab-account-details" v-if="!isLoading">
      <account-item :account="account" />
      <ion-button expand="block" fill="outline" color="secondary" class="ion-margin-horizontal" :router-link="'/tabs/account/' + account.uid + '/edit'">
        Edit
      </ion-button>
      <account-details :account="account" />
      <account-progress :progress="account.progress" />
      <account-characters :characters="account.characters" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonPage,
  IonContent,
  IonButton,
} from '@ionic/vue'
import { useRoute } from "vue-router"
import { defineComponent } from 'vue'
import { loadingController } from '@ionic/vue'
import AccountItem from "@/components/AccountItem.vue"
import AccountDetails from "@/components/AccountDetails.vue"
import AccountProgress from "@/components/AccountProgress.vue"
import AccountCharacters from "@/components/AccountCharacters.vue"
import { db } from '@/db/firebase'

export default defineComponent({
  name: 'TabAccountDetails',
  components: {
    IonPage,
    IonContent,
    IonButton,
    AccountItem,
    AccountDetails,
    AccountProgress,
    AccountCharacters,
  },
  data() {
    return {
      account: undefined as any,
      loading: undefined as any,
      isLoading: true,
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
      this.isLoading = true
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
      this.isLoading = false
    },
    async loadAccount(uid: string) {
      // update data in background if we have fetched before
      let needLoading = true
      if (this.account) {
        if (this.account.uid === uid) {
          needLoading = false
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
    formatNumber(num: number) {
      return new Intl.NumberFormat().format(num)
    }
  }
})
</script>