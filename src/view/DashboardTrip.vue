<template>
    <div>
        <AddTrip
            :search-results="city"
            :is-submitting="false"
            @add-trip="addArticle"
            @search=""
        />
        <TripCard

        
        />
    </div>
</template>

<script setup lang='ts'>
import { computed,ref } from 'vue';
import AddTrip from '../components/AddTrip.vue';
import TripCard from '../components/TripCard.vue';
import TripService from '../services/TripService.ts';
import type { Trip, GeoCity, WeatherData } from '../interface.ts';
import { auth } from '../firebase.ts';
import WeatherService from '../services/WeatherService.ts';

const city=ref([]);
const villes = ref<GeoCity[]>([]);
const meteo = ref<WeatherData>();

 
console.log(auth);

async function addArticle(form:any){
    try {
        villes.value = await WeatherService.searchCities(form.ville);
        const ville = villes.value[0];

        const trip=ref<Trip>({
            cityName : form.ville,
            latitude : ville.latitude, 
            longitude : ville.longitude, 
            country : ville.country, 
            startDate : form.date, 
            notes : form.notes, 
            createdAt: Date.now(),
        });
        await TripService.addTrip(userId,trip.value);

   
    } catch (error) {
    console.error("Erreur lors de l'ajout de l'article :", error);
    alert("Une erreur est survenue. Veuillez réessayer.");
    }
};


</script>

<style scoped lang="css">
</style>