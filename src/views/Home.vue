<template>
  <div class="home">
    <h1>Adopt a New best friend</h1>
    {{ getAllcats.length }}
    {{ animalsCount }}

    <button @click="togglePetform" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" @reset="onReset" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group type="number" id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',

  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllcats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetform () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      // reset the form after submit
      this.formData = {
        name: '',
        age: '',
        species: ''
      }
    }
  }

}
</script>
