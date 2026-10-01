<template>
    <form class="card-body gap-2" @submit.prevent="onSubmit">
        <h2 class="card-title">Planifier un voyage</h2>

        <fieldset class="fieldset">
        <legend class="fieldset-legend">Ville</legend>
        <input type="text" class="input w-full" placeholder="Ex: Kyoto" v-model="form.ville" @input="onCityInput"/>
        </fieldset>

        <fieldset class="fieldset">
        <legend class="fieldset-legend">Date</legend>
        <input type="date" class="input w-full" v-model="form.date" />
        </fieldset>

        <fieldset class="fieldset">
        <legend class="fieldset-legend">Notes</legend>
        <textarea class="textarea w-full h-24" v-model="form.notes"></textarea>
        </fieldset>

        <button type="submit" class="btn btn-primary mt-2" disabled>Enregistrer</button>
    </form>
</template>

<script setup lang='ts'>
import { reactive } from "vue";

interface NewTrip {
  ville: string
  date: string
  notes: string
}
const form=reactive<NewTrip>({
  ville: '',
  date: '',
  notes: '',
})

const props=defineProps<{
    searchResults?:string[];
    isSubmitting?:boolean; 
}>();


const emit = defineEmits<{
    search: [query: string]
    addTrip: [trip: NewTrip]
}>()

function onCityInput(event: Event) {
    
    emit('search', (event.target as HTMLInputElement).value)
}

function onSubmit() {
  if (props.isSubmitting) return
  emit('addTrip', { ...form })
  Object.assign(form, { city: '', date: '', notes: '' })
}

</script>

<style scoped lang="css">
</style>