<template>
  <button 
    @click="logout" 
    class="btn btn-ghost btn-sm text-error gap-2"
    :disabled="isLoading"
  >
    <span v-if="isLoading" class="loading loading-spinner loading-xs"></span>
    <template v-else>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="w-4 h-4"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12" 
        />
      </svg>
      Déconnexion
    </template>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app'; // <--- Importé depuis firebase/app !
import { useRouter } from 'vue-router';
import { auth } from '../firebase'; // Assurez-vous que le chemin est correct

const router = useRouter();
const isLoading = ref<boolean>(false);

async function logout(): Promise<void> {
  isLoading.value = true;
  try {
    await signOut(auth);
    await router.push({ name: 'connexion' });
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error('Erreur Firebase de déconnexion :', error.message);
    } else {
      console.error('Erreur inconnue :', error);
    }
  } finally {
    isLoading.value = false;
  }
}
</script>