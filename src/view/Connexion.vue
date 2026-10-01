<template>
   <div class="flex flex-col items-center gap-6 w-96 mx-auto">

        <!-- Titre -->
        <h1 class="text-3xl font-bold text-primary">Se Connecter</h1>

        <!-- Carte du formulaire (bordure rose/secondary) -->
        <div class="card bg-base-200 w-full border border-secondary">
            <form class="card-body gap-4" @submit.prevent="login">

            <label class="form-control w-full">
                <div class="label">
                <span class="label-text">Adresse Email</span>
                </div>
                <input
                type="email"
                placeholder="votre@email.com"
                class="input input-bordered w-full bg-base-300"
                v-model="email"
                />
            </label>

            <label class="form-control w-full">
                <div class="label">
                <span class="label-text">Mot de passe</span>
                </div>
                <input
                type="password"
                placeholder="Entrez votre mot de passe"
                class="input input-bordered w-full bg-base-300"
                v-model="password"
                />
            </label>
            <button type="submit" class="btn btn-primary w-full gap-2">
                <router-link to="/dashboard-trip">
                    <!-- Icône "login" (heroicons) -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    
                    Se connecter
            </router-link>
            </button>
            
            </form>
        </div>

        <!-- Lien inscription -->
        <p class="text-sm">
            Vous n'avez pas encore de compte ?
            <a href="/register" class="link link-secondary font-semibold no-underline">Inscrivez-vous</a>.
        </p>

    </div> 
</template>

<script setup lang='ts'>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter, RouterLink } from "vue-router";
import { auth } from "../firebase";

const email = ref("");
const password = ref("");
const router = useRouter();

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    // Assurez-vous que la route 'home' existe
    router.push({ name: "dashboard-trip" });
  } catch (error) {
    // DaisyUI permettrait ici d'utiliser un composant Toast ou Modal plus élégant que alert()
alert("Erreur de connexion : " + (error as Error).message);  }
}

</script>

<style scoped lang="css">
</style>