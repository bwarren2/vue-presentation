<template>
  <div id="app">

    <section>
      <h1>Vue implements reactivity</h1>
      <p>{{msg}}</p>
      <input class='wide' type="text" v-model='msg'>
    </section>

    <hr>

    <section>
      <h2>Reactivity is compositional (I can insert stuff).</h2>
      <p>My favorite person is {{favorite_person}}.</p>
      <input type="text" v-model='favorite_person'>

      <p>
        <pre v-highlightjs>
          <code v-pre class="html">
            <p >My favorite person is {{favorite_person}}.</p>
           input  type="text" v-model='favorite_person'

        </code></pre>
      </p>

    </section>

    <hr>

    <section>
      <h2>HTML attributes can be bound to reactive data</h2>
      <p>This is the class we are adding: {{class_msg}}</p>
      <input class='wide' type="text" v-model="class_msg" :class="class_msg" >
    <p>
    <code>
    input.tiny{
      width: 25px
    }
    input.medium{
      width: 75px
    }
    input.large{
      width: 275px
    }
    </code>
    </p>

    </section>

    <hr>

    <section>
      <h2>I can bind to whatever events I want</h2>
      <button @click="increment">Make it go up</button>
      <button @click="decrement">Make it go down</button>
      <p>{{counter}}</p>
      <p v-if="counter < 0">And I can use conditionals (counter is negative)</p>
    </section>

    <hr>


  </div>

</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'This message is reactive.',
      favorite_person: 'John',
      class_msg: 'fake_class',
      counter: 0,
    }
  },
  methods: {
    increment(){
      this.$data.counter++;
    },
    decrement(){
      this.$data.counter--;
    }

  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20pt;
}

h1, h2 {
  font-weight: normal;
}

input.wide{
  width: 475px
}
input.tiny{
  width: 25px
}
input.medium{
  width: 75px
}
input.large{
  width: 275px
}

section{
  margin:40px;
}
</style>
