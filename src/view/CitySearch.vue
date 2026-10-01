<template>
    <div class="card bg-base-200 w-full max-w-xl shadow-md mx-auto">
      <div class="card-body gap-4">
        <h2 class="card-title text-xl">Rechercher la météo d'une ville</h2>
 
        <input
          v-model="recherche"
          type="text"
          placeholder="Ex : Toulouse"
          class="input input-bordered w-full"
          @keyup.enter="rechercher"
        />
 
        <span v-if="chargement" class="loading loading-spinner mx-auto"></span>
 
        <div v-if="meteo" class="card bg-neutral text-neutral-content">
          <div class="card-body items-center text-center gap-1">
            <h3 class="text-lg font-semibold">Hello, {{ villes[0].name }}</h3>
            <p class="text-4xl font-bold">{{ meteo.temperature }} °C</p>
            <p class="text-sm opacity-70">Vent : {{ meteo.windSpeed }} km/h</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang='ts'>
import WeatherService  from '../services/WeatherService';
import type { WeatherData, GeoCity } from '../interface';
import { ref } from 'vue';

  const recherche = ref('');
  const villes = ref<GeoCity[]>([]);
  const meteo = ref<WeatherData>();
  const chargement = ref(false);

  async function rechercher() {
    const nom = recherche.value.trim();
    if (!nom) return;
    try {
      chargement.value = true;
      villes.value = await WeatherService.searchCities(nom);
      const ville = villes.value[0]
      await WeatherService.getWeather(ville.latitude, ville.longitude);
      console.log(villes.value);
      if (!villes.value.length) console.log('Ville introuvable.');
      meteo.value = await WeatherService.getCachedWeather(ville.latitude, ville.longitude)
    } catch(err) {
      console.log('Impossible de récupérer la météo.', err)
    }
  }






</script>

<style scoped lang="css">
</style>