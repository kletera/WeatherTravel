<template>
    <div class="card bg-neutral text-neutral-content w-96 shadow-xl">
  <div class="card-body gap-4">

    <!-- En-tête : ville + date -->
    <div class="flex items-center justify-between">
      <h2 class="card-title text-xl">{{ props.ville }}</h2>
      <div class="badge badge-primary badge-lg font-semibold">{{ props.date }}</div>
    </div>

    <!-- Bloc météo -->
    <div class="flex items-center justify-between rounded-box bg-base-300 px-4 py-3">
      <span class="text-3xl font-bold">23 °C</span>
      <span class="text-sm opacity-80">Vent : 4.3 km/h</span>
    </div>

    <!-- Note -->
    <p class="italic text-sm">{{ props.note }}</p>

    <!-- Action -->
    <div class="card-actions justify-end">
      <button class="btn btn-outline btn-error btn-sm">Supprimer</button>
    </div>

  </div>
</div>
</template>

<script setup lang='ts'>
import { computed, } from 'vue'

interface Props {
    ville?: string;
    date?: string;
    note?:string;
}

const props = withDefaults(defineProps<Props>(), {
    ville: '',
    date:'',
    note: '',
});

const emit = defineEmits({
    'update:text': (value: string) => typeof value === 'string',
});



</script>

<style scoped lang="css">
</style>