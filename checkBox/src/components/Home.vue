<template>
  <div>
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>

    <form class="form" @submit="checkForm">
      <div for="movie">Ваш филиал <span> *</span></div>
      <select v-model="movie" v-if="online === false" name="movie" id="movie">
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
      <select v-if="online === true" disabled name="" id="">
        <option selected>______________</option>
      </select>

      <div>
        <input @click="onlineHandler" type="checkbox" />
        <label for="">Онлайн</label>
      </div>
      <div>
        Тема обращения <span>*</span>
        <div v-for="(item, index) in items" :key="index">
          <input @click="clear()" v-model="item.selected" type="checkbox" />
          <label>{{ item.label }}</label>
        </div>
      </div>

      <input
        @click="clear()"
        v-model="problem"
        placeholder="Другое"
        type="text"
      />

      <div for="name">Описание проблемы <span>*</span></div>

      <textarea
        v-model="text"
        style="resize: none"
        name="name"
        id="name"
        cols="50"
        rows="10"
      ></textarea>

      <div>
        Загрузка документов
        <p>
          Приложите, пожалуйста, полноэкранный скриншот. Это поможет быстрее
          решить проблему.
        </p>
      </div>
      <input type="file" />
      <p v-if="errors.length"></p>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      <button
        :disabled="!text.length"
        v-on:submit.prevent="submitHandler"
        type="submit"
        id="btn"
        class="btn btn-warning"
      >
        Отправить
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      isDisabled: true,
      errors: [],
      movie: null,
      text: '',
      button: false,
      problem: '',
      problemDisabled: false,
      cities: [],
      online: false,
      items: [
        {
          label: 'Недоволен качеством услуг',
          selected: false,
        },
        {
          label: 'Расторжение договора',
          selected: false,
        },
        {
          label: 'Не приходит письмо активации на почту',
          selected: false,
        },
        {
          label: 'Не работает личный кабинет',
          selected: false,
        },
      ],
      clear: () => {
        this.items.forEach((item) => (item.selected = false));
        this.problem = '';
        if (this.isDisabled === true) {
          this.isDisabled = false;
        } else {
          this.isDisabled = true;
        }
      },
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.text) {
        this.errors.push('Введите описание проблемы');
      }
      if (!this.movie) {
        this.errors.push('Выберите филиал');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },

    submitHandler() {
      let data = {};
      axios
        .post(
          'https://60254fac36244d001797bfe8.mockapi.io/api/v1/send-form',
          data
        )
        .then((res) => {
          if (res.data.success) {
            alert('Запрос успешно отправлен');
          } else {
            alert('Не удалось отправить запрос, повторите попытку позднее');
          }
        });
    },
    submitHandle() {
      const data = {};
      axios
        .get('https://60254fac36244d001797bfe8.mockapi.io/api/v1/city', data)
        .then((res) => {
          this.cities.push(...res.data.map((el) => el.title));
        });
    },
    onlineHandler() {
      if (this.online === false) {
        return (this.online = true);
      } else {
        this.online = false;
      }
    },
  },

  beforeMount() {
    this.submitHandle();
  },
};
</script>
