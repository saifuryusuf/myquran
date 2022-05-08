<template>
  <body>
  <section>
    <div class="judul">
      <h1 v-if="chapter">{{chapter.name_complex}}</h1>
      <p v-if="chapter">Surah ke-{{chapter.id}} Turun di {{chapter.revelation_place}}</p>
      <p v-if="audio_file">
        <audio controls>
          <source :src="audio_file.audio_url">
        </audio>
      </p>
    </div>
  </section>
  <section class="arab">
    <p class="bismilah text-center mt-3 p-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </p>
    <p class="bismilah text-center mt-3 p-2">Dengan menyebut nama Allah yang Maha pengasih lagi Maha penyayang</p>
    <hr>
    <div v-for="(verse,index) in verses">
      <p class="ayat text-end">{{verse.text_uthmani}} { {{verse.verse_key}} }</p>
      <p v-if="translations">{{index+1}}. {{translations[index].text}}</p>
      <hr>
    </div>
  </section>
  </body>
</template>

<script>
export default {
  name: 'A102',
  data() {
    return {
      chapter: null,
      audio_file: null,
      verses: [],
      translations: []
    }
  },
  methods: {
    getChapter() {
      fetch('https://api.quran.com/api/v4/chapters/102?language=id', { method: 'GET', })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.chapter = json.chapter;
        })
    },
    getAudio() {
      fetch('https://api.quran.com/api/v4/chapter_recitations/3/102', { method: 'GET', })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          //console.log(json)
          this.audio_file = json.audio_file;
          //this.audio_file = this.getAudio(audio_file.audio_url);
        })
    },
    getVerses(){
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=102', {
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
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=102', {
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
    this.getChapter();
    this.getAudio();
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