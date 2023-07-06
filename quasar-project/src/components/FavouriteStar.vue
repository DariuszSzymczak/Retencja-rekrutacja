<template>
  <img src="fav-active.png" v-if="isFav" @click="() => { removeFavourite(id) }" />
  <img src="fav.png" v-else @click="() => { setFavourite(id) }" />
</template>

<script setup lang="ts">
const props = defineProps(['id'])
import { ref } from 'vue';
const isFav = ref<boolean>(false);
isFavourite(props.id);

function setFavourite(userId: number) {
  const favouriteUsers = localStorage.getItem('favourites')?.split(',').map(el => parseInt(el));
  if (!favouriteUsers?.includes(userId)) {
    favouriteUsers?.push(userId);
    const newList = favouriteUsers?.join(',') + '';
    localStorage.setItem('favourites', newList)
    isFavourite(props.id);

  }
}

function isFavourite(userId: number) {

  const favouriteUsers = localStorage.getItem('favourites')?.split(',').map(el => parseInt(el));
  if (favouriteUsers?.includes(userId)) {
    isFav.value = true;
  } else {
    isFav.value = false;
  }
}

function removeFavourite(userId: number) {
  const favouriteUsers = localStorage.getItem('favourites')?.split(',').map(el => parseInt(el));
  const updatedFavourites = favouriteUsers?.filter(el => el !== userId);
  if (updatedFavourites) {

    localStorage.setItem('favourites', updatedFavourites?.join(','));
    isFavourite(props.id);
  }
}



</script>
