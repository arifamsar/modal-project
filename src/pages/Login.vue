<template>
  <div class="bg-blue-200 py-10 mx-auto rounded-xl w-1/2 mt-10">
    <h1 class="text-4xl font-semibold text-center">Login</h1>
    <form @submit.prevent="redirectToHome" class="flex flex-col mt-8 mx-10">
      <div class="mb-3">
        <label for="nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
        <input type="text" placeholder="Name" v-model="nama" class="border border-gray-300 px-4 py-2 rounded-lg w-full" />
      </div>
      <div class="mb-3">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" placeholder="Email" v-model="email" class="border border-gray-300 px-4 py-2 rounded-lg w-full" />
      </div>
      <div class="mb-3">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" placeholder="Password" v-model="password" class="border border-gray-300 px-4 py-2 rounded-lg w-full" required />
      </div>
      <div class="mb-3">
        <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
        <select class="p-3 rounded-lg w-full" name="role" v-model="role">
          <option value="mahasiswa">Mahasiswa</option>
          <option value="dosen">Dosen</option>
        </select>
      </div>
      <div class="mb-3">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full mb-3">Masuk</button>
        <button @click="redirectToSignUp" type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">Daftar</button>
      </div>
    </form>
  </div>
  <div class="text-center">
    <p>Nama : {{ nama }}</p>
    <p>Email : {{ email }}</p>
    <p>Password : {{ password }}</p>
    <p>Role : {{ role }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: "",
      email: "",
      password: "",
      role: "",
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push("/Home");
    },
    redirectToSignUp() {
      this.$router.push("/SignUp");
    },
  },
};
</script>

<style></style>
