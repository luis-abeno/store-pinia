<template>
  <div>
    <h1>Contact Us</h1>
    <Form @submit="onSubmit">
      <div>
        <label for="email">Email:</label>
        <Field name="email" type="email" :rules="validateEmail" />
        <ErrorMessage name="email" />
      </div>

      <button type="submit">Submit</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'

function onSubmit(values) {
  console.log('Form submitted', values)
}

function validateEmail(value) {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // All is good
  return true
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
