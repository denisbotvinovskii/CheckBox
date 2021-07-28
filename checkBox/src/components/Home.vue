<template>
  <div>
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <form class="form" action="submit">
      <div>Ваш филиал <span> *</span></div>
      <select v-if="online === false" required name="" id="">
        <option selected>Выберите город</option>
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
      <select v-if="online === true" disabled required name="" id="">
        <option selected>Выберите город</option>
      </select>
      <div>
        <input @click="onlineHandler" type="checkbox" />
        <label for="">Онлайн</label>
      </div>
      <div>
        Тема обращения <span>*</span>
        <div v-for="(item, index) in items" :key="index">
          <input
            @click="problemClear"
            v-model="item.selected"
            type="checkbox"
          />
          <label>{{ item.label }}</label>
        </div>
      </div>

      <input
        @click="clear()"
        v-model="problem"
        placeholder="Другое"
        type="text"
      />
      <div>Описание проблемы <span>*</span></div>
      <textarea
        v-model="text"
        style="resize: none"
        required
        name=""
        id=""
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
      <button
        v-on:click.prevent="submitHandler"
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
      },
    };
  },
  methods: {
    submitHandler() {
      let data = {};
      axios
        .post(
          'https://60254fac36244d001797bfe8.mockapi.io/api/v1/send-form',
          data
        )
        .then((res) => {
          if (res.data.success) {
            alert('ok');
          } else {
            alert('NEIN');
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
    problemClear() {
      this.problem = '';
    },
    buttonActivate() {
      if (this.text !== '') {
        return (this.button = true);
      } else {
        this.button = false;
      }
    },
  },

  beforeMount() {
    this.submitHandle();
  },
};
</script>
