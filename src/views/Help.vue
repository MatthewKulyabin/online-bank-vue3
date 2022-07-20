<template>
  <app-page back title="Help">
    <question-item
      v-for="(question, idx) in questions"
      :key="idx"
      :question="question"
    ></question-item>
  </app-page>
</template>

<script>
import QuestionItem from '../components/question/QuestionItem.vue';
import AppPage from '../components/ui/AppPage.vue';
export default {
  components: { AppPage, QuestionItem },
  setup() {
    const questions = [
      {
        title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aperiam?',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
      },
      {
        title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aperiam?',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
      },
    ];

    return { questions };
  },
};
</script>
