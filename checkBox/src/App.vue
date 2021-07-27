<template>
  <div>
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <form class="form" action="submit">
      <div>Ваш филиал <span> *</span></div>
      <select required name="" id="">
        <option selected>Выберите город</option>

        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
      <div>
        <input type="checkbox" />
        <label for="">Онлайн</label>
      </div>
      <div>
        <div>
          Тема обращения <span>*</span>
          <div>
            <input type="checkbox" />
            <label for="">Недоволен качеством услуг</label>
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <label for="">Расторжение договора</label>
        </div>
        <div>
          <input type="checkbox" />
          <label for="">Не приходит письмо активации на почту</label>
        </div>
        <div>
          <input type="checkbox" />
          <label for="">Не работает личный кабинет</label>
        </div>
      </div>
      <input placeholder="Другое" type="text" />
      <div>Описание проблемы <span>*</span></div>
      <textarea
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
      <button type="button" class="btn btn-warning">Отправить</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      problem: '',
      cities: [],
    };
  },
  methods: {
    submitHandle() {
      const data = {};
      axios
        .get('https://60254fac36244d001797bfe8.mockapi.io/api/v1/city', data)
        .then((res) => {
          this.cities.push(...res.data.map((el) => el.title));
        });
    },
  },
  beforeMount() {
    this.submitHandle();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;

  margin-top: 30px;
}
.form {
  text-align: left;
  padding-left: 25px;
  padding-bottom: 25px;
  padding-top: 15px;
  width: 60%;
  height: 100%;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  display: inline-block;
}
span {
  color: orange;
}
button {
  background-color: orange;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.problemBox {
  height: 100%;
  width: 10vh;
}
div {
  margin-top: 10px;
}
</style>
