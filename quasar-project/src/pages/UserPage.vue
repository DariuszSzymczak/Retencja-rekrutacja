<template>
  <div class="user-list user-page">
    <q-toolbar class="user-details-header">
      <h6>Szczegóły</h6>
      <q-btn flat round dense icon="close" @click="goBack" />
    </q-toolbar>
    <div class="user-details-body row">
      <div class="user-details-text col-8">
        <div class="user-detail">
          <b>Id:</b>
          <span>{{ activeUser?.id }}</span>
        </div>
        <div class="user-detail">
          <b>Imie i nazwisko:</b>
          <span>{{ activeUser?.first_name }} {{ activeUser?.last_name }}</span>
        </div>
        <div class="user-detail">
          <b>Email:</b>
          <span>{{ activeUser?.email }}</span>
        </div>
        <div class="user-detail">
          <b>Ulubione:</b>
          <span class="star-box">
            <FavouriteStar :id="activeUser?.id" />
          </span>
        </div>
      </div>
      <div class="user-details-image col-4 ">
        <img :src="activeUser?.avatar" alt="Avatar" class="user-avatar-img">
      </div>
    </div>
  </div>
</template>




<script setup lang="ts">
import { UserData } from 'src/components/UserList.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import FavouriteStar from 'src/components/FavouriteStar.vue';

const router = useRouter();
const activeUser = ref<UserData | undefined>();
const route = useRoute();

const goBack = () => {
  router.go(-1);
};

const param = route.params.activeUser as unknown as string;
console.log('user id  UserPage - ', param)
activeUser.value = JSON.parse(param) as UserData;

</script>
