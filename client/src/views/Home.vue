<template>
  <b-container
    id="appContainer"
    class="d-flex flex-column align-items-center justify-content-center"
    v-if="!username"
  >
    <h1>Connexion</h1>
    <b-col cols="12" sm="6" md="6" lg="4" id="login" class="content-container">
      <b-form @submit.prevent="onSubmit">
        <b-form-group id="input-group-username" label-for="input-username">
          <b-form-input
            id="input-username"
            v-model="form.username"
            type="text"
            placeholder="Username"
            :class="{ 'is-invalid': $v.$anyError }"
          />
          <b-form-invalid-feedback>
            Username is required
          </b-form-invalid-feedback>
        </b-form-group>
        <b-button type="submit" block variant="primary">Submit</b-button>
      </b-form>
    </b-col>
  </b-container>
  <app-game v-else :username="username"/>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

import Game from '../components/Game.vue';

export default {
  name: 'Home',
  mixins: [validationMixin],
  components: {
    appGame: Game,
  },
  data() {
    return {
      username: null,
      form: {
        username: null,
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
      },
    },
  },
  created() {
    const username = localStorage.getItem('username');
    if (!username) return;

    this.username = username;
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$anyError) return;
      this.username = this.form.username;
      localStorage.setItem('username', this.username);
    },
  },
};
</script>

<style lang="scss" scoped>
#appContainer {
  min-height: 100vh;
}
</style>
