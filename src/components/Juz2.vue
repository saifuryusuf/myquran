<template>
  <body>
  <section>
    <div>
      <br><br><br><br>
      <h1>Juz 2</h1>
    </div>
  </section>
  <section class="arab">
    <div v-for="(verse,index) in verses">
      <p class="ayat text-end">{{verse.text_uthmani}} { {{verse.verse_key}} }</p>
      <p v-if="translations">{{translations[index].text}}</p>
      <hr>
    </div>
  </section>
  </body>
</template>

<script>
export default {
  name: 'Juz2',
  data() {
    return {
      verses: [],
      translations: []
    }
  },
  methods: {
    getVerses(){
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?juz_number=2', {
        method: 'GET'
      })
        .then(res =>{
          if(res.ok){
            return res.json()
          }
        })
        .then(json => {
          this.verses = json.verses;
        })
    },
    getTranslate() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?juz_number=2', {
        method: 'GET'
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.translations = json.translations;
        });
    },
  },
  mounted() {
    this.getVerses();
    this.getTranslate();
  }
}
</script>

<style scoped>
.ayat{
  margin-right: 10px;
}
body{
  margin-left: 50px;
  margin-right: 50px;
}
</style>