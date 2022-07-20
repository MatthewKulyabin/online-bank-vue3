import { computed, watch } from 'vue';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const useLoginForm = () => {
  const store = useStore();
  const router = useRouter();
  const { handleSubmit, isSubmitting, submitCount } = useForm();

  const PASSWORD_MIN_LENGTH = 6;

  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Email is required')
      .email('Email should be valid')
  );
  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Password is required')
      .min(
        PASSWORD_MIN_LENGTH,
        `Password should has ${PASSWORD_MIN_LENGTH} or more symbols`
      )
  );

  const isTooManyAttempts = computed(() => submitCount.value >= 3);

  watch(isTooManyAttempts, (val) => {
    if (val) {
      setTimeout(() => {
        submitCount.value = 0;
      }, 1000);
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await store.dispatch('auth/login', values);
      router.push('/');
    } catch (error) {}
  });

  return {
    email,
    eError,
    eBlur,

    password,
    pError,
    pBlur,

    onSubmit,
    isSubmitting,
    isTooManyAttempts,
  };
};
