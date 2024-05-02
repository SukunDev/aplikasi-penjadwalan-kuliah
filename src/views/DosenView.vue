<template>
  <div class="main-content">
    <h4>Entry Data Dosen</h4>

    <div class="form-group">
      <label for="nidnInput">NIDN</label>
      <input type="number" class="form-control" id="nidnInput" v-model="form.nidn" />
    </div>
    <div class="form-group">
      <label for="namaInput">Nama</label>
      <input type="text" class="form-control" id="namaInput" v-model="form.nama" />
    </div>
    <button @click="onSubmitHandler" class="btn btn-primary">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dosen from '../types/DosenInterface.ts'
import { DosenService } from '../services/DosenService.ts'

export default defineComponent({
  name: 'dosen-view',
  data() {
    return {
      form: {
        nidn: '',
        nama: ''
      }
    }
  },
  methods: {
    onSubmitHandler() {
      if (this.form.nidn.length < 1 && !this.form.nama) {
        alert('Field NIDN dan Nama belum di isi')
        return
      }
      if (this.form.nidn.length < 1) {
        alert('Field NIDN belum di isi')
        return
      }
      if (!this.form.nama) {
        alert('Field nama belum di isi')
        return
      }
      const dosen: Dosen = new DosenService(this.form.nidn, this.form.nama)
      if (dosen.store()) {
        alert(`Data Dosen ${this.form.nama} berhasil disimpan`)
        return
      }
      alert(`Data Dosen ${this.form.nama} gagal disimpan`)
    }
  }
})
</script>
