<template>
  <div class="user-list">
    <div class="search-wrapper">
      <div class="">
        <div class="row search-input-wrapper ">
          <div class="col-1 text-center">
            <q-icon name="search" class="search-icon" />

          </div>
          <div class="col-11">
            <input type="text" v-model="searchQuery" placeholder="Szukaj użytkowników..." class="search-input"
              @keyup="searchHandler" />

          </div>
        </div>
      </div>
      <div class="checkbox-wrapper">
        <q-checkbox v-model="showAll" class="checkbox"></q-checkbox>
        <span class="checkbox-label">Show All Users</span>
      </div>
    </div>

    <UserList v-if="showAll" :data="userList" />
    <UserList v-else :data="filteredUsers" />
    <b v-if="listError" class="list-error"> {{ listError }}</b>

  </div>
</template>




<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { UserData } from './../components/UserList.vue';
import UserList from './../components/UserList.vue';
const showAll = ref(false);
const searchQuery = ref<string>('');
const userList = ref<UserData[]>([]);
const filteredUsers = ref<UserData[]>([]);
const listError = ref('');
function searchHandler() {
  filteredUsers.value = searchUsers(searchQuery.value);
  showAll.value = false;
}


function searchUsers(searchQuery: string) {
  if (!searchQuery) {
    return [];
  }


  const filteredUsers = userList.value.filter((user: UserData) => {
    const fullName = `${user.first_name} ${user.last_name}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return filteredUsers;
}

async function getUserList() {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    userList.value = response.data.data;
    listError.value = '';
  } catch (error) {
    console.error(error);
    listError.value = 'Wystąpił błąd podczas pobierania danych użytkowników';
    setTimeout(getUserList, 3000)
  }
}


onMounted(async () => {
  await  getUserList();
});

</script>
