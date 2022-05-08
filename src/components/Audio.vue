<template>
  <body>
  <hr>
  <hr>
  <hr>
  <section>
      <div v-for="(aud,index) in chapters">
        <h3>{{index+1}}. Surah {{aud.name_complex}} ({{aud.name_arabic}})</h3>
        <!--<div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Detail
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">{{aud.translated_name.name}}</div>
            </div>
          </div>
        </div>-->
        <p>Surah ini memiliki arti {{aud.translated_name.name}}. Diturunkan di {{aud.revelation_place}} pada urutan ke-{{aud.revelation_order}}. Terdapat {{aud.verses_count}} ayat dalam surah ini. </p>
        <div v-if="audio_files">
        <audio controls>
          <source :src="audio_files[index].audio_url">
        </audio>
        </div>
        <br>
      </div>
  </section>
  </body>
</template>

<script>
export default {
  name: 'Audio',
  data() {
    return {
      audio_files: [],
      chapters: []
    }
  },
  methods: {
    getAudio() {
      fetch('https://api.quran.com/api/v4/chapter_recitations/3?language=id', { method: 'GET', })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.audio_files = json.audio_files;
        })
    },
    getListSurah() {
      fetch('https://api.quran.com/api/v4/chapters?language=id', { method: 'GET', })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.chapters = json.chapters;
        })
    }
  },
  mounted() {
    this.getAudio();
    this.getListSurah();
  }
}
</script>

<style scoped>
body{
  margin-left: 50px;
  margin-right: 50px;
}
.accordion{
  width: 30%;
}
.accordion-button, .accordion-body{
  background-color: cyan;
  border-width: 5px;
  border-color: #282828;
}
</style>