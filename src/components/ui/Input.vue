<template>
  <div style="">
    <input type="text" :id="ident" name="ident" :placeholder="text"/>
    <label :for="ident">{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["text", "ident"]
}
</script>

<style scoped>
input {
  height: 100%;
  width: 100%;
  background-color: #efefef;
  border-color: #02001A;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  transition: 200ms;
}

input {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #02001A;
}

input::placeholder {
  color: transparent;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #888888;
  top: 15px;
}

input:focus,
input:not(:placeholder-shown) {
  border-color: #888888;
}


label {
  top: 50%;
  left: 20px;
  position: absolute;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  font-variant: small-caps;

  transition: 200ms;

  color: #02001A;
}


</style>