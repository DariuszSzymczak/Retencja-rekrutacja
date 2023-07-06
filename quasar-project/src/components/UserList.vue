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
            <q-btn color="primary" icon="search" label="Szczegóły" @click="() => { showDetails(user) }" />
          </div>
        </div>
        <div class="col-sm-5 col-sm-5 col-xs-5 col-md-5 col-lg-2">
          <div class="user-avatar"><img :src="user.avatar" alt="Avatar"></div>
        </div>
      </div>

    </div>

  </div>

  <q-dialog v-model="showModal" position="standard" transition-show="slide-up" transition-hide="slide-down">


    <q-card class="user-details">
      <q-toolbar class="user-details-header">
        <h6>Szczegóły</h6>
        <q-btn flat round dense icon="close" @click="closeDetails" />
      </q-toolbar>
      <div class="user-details-body row">
        <div class="user-details-text col-10">
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
            <span>
              <FavouriteStar :id="activeUser?.id" />
            </span>
          </div>
        </div>
        <div class="user-details-image col-2 ">
          <div class="user-avatar"><img :src="activeUser?.avatar" alt="Avatar"></div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FavouriteStar from './../components/FavouriteStar.vue';

const showModal = ref(false);
const activeUser = ref<UserData | undefined>();



export type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};


function showDetails(user: UserData) {
  showModal.value = true;
  activeUser.value = user;
}

function closeDetails() {
  showModal.value = false;
}


defineProps(['data'])
</script>

