<template>
  <div v-for="user in data" :key="user.id" class="user-row">
    <div class="user-list-item full-width	">
      <div class="row full-width	">
        <div class=" col-sm-7 col-xs-7 col-md-7 col-lg-10 justify-center user-list-item-strech ">
          <div>
            <div class="user-name q-gutter-xs rounded-borders user-header">
              <div>{{ user.first_name }}</div>
              <div>{{ user.last_name }}</div>
            </div>
            <div class="user-email">{{ user.email }}</div>
          </div>
          <div class="user-list-item-footer">
            <FavouriteStar :id="user.id" />
            <q-btn color="primary" icon="search" label="Szczegóły" @click="() => { navigateToUserPage(user) }" />
          </div>
        </div>
        <div class="col-sm-5 col-sm-5 col-xs-5 col-md-5 col-lg-2">
          <div class="user-avatar"><img :src="user.avatar" alt="Avatar"></div>
        </div>
      </div>

    </div>

  </div>


</template>

<script setup lang="ts">
defineProps(['data'])
import { ref } from 'vue';
import FavouriteStar from './../components/FavouriteStar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();


export type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const navigateToUserPage = (user: UserData) => {
  const serializedData = JSON.stringify(user);
  router.push({ name: 'UserPage', params: { activeUser: serializedData } });
};

</script>

