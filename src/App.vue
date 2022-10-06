<script setup>
import { ref } from "@vue/reactivity";
import store from "./store/store";

const userStore = store();
const sort = ref(false);

const user_input = ref({
  name: "",
  email: "",
});

const createUser = () => {
  if (!user_input.value.name || !user_input.value.email) {
    return alert("Please enter both name and email");
  } else {
    userStore.create(user_input.value);
    user_input.value = {
      name: "",
      email: "",
    };
    console.log(user_input.value);
  }
};

const DeleteUser = (id) => {
  console.log("Hello")
  userStore.delete(id);
};


</script>

<template>
  <main>
    <h1>Team Manager</h1>

    <form @submit.prevent="createUser">
      <div class="form-group">
        <input
          type="text"
          placeholder="e.g Naruto Uzumaki"
          v-model="user_input.name"
        />
        <input
          type="text"
          placeholder="e.g Naruto@gmail.com"
          v-model="user_input.email"
        />
        <input type="submit" value="Create user" />
      </div>
    </form>
    <label><span>Sort</span><input type="checkbox" v-model="sort" /></label>

    <div v-if="!sort">
      <div v-for="user in userStore.users" class="users" :key="user">
        <h3>ID: {{ user.id }}</h3>
        <h3>{{ user.name }}</h3>
        <h3>{{ user.email }}</h3>
        <button @click="DeleteUser(user.id)">delete</button>
      </div>
    </div>

    <div v-else>
      <div v-for="user in userStore.usersByName" class="users" :key="user">
        <h3>ID: {{ user.id }}</h3>
        <h3>{{ user.name }}</h3>
        <h3>{{ user.email }}</h3>
        <button @click="DeleteUser(user.id)">delete</button>
      </div>
    </div>
  </main>
</template>
  
<style scoped>
</style>
