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
    <div class="form-group">
      <label for="namaInput">Nama</label>
      <select type="text" class="form-control" id="namaInput" v-model="form.jenis_kelamin">
        <option value="laki laki">Laki Laki</option>
        <option value="perempuan">Perempuan</option>
      </select>
    </div>
    <button @click="onSubmitHandler" class="btn btn-primary">Submit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dosen from '../types/DosenInterface'
import DosenService from '../services/DosenService'

export default defineComponent({
  name: 'dosen-view',
  data() {
    return {
      form: {
        nidn: 0,
        nama: '',
        jenis_kelamin: 'laki laki'
      } as Dosen
    }
  },
  methods: {
    onSubmitHandler() {
      if (!this.form.nidn && this.form.nama.length < 1 && this.form.jenis_kelamin.length < 1) {
        alert('Field NIDN, Nama, dan Jenis Kelamin belum di isi')
        return
      }
      if (!this.form.nidn) {
        alert('Field NIDN belum di isi')
        return
      }
      if (this.form.nama.length < 1) {
        alert('Field Nama belum di isi')
        return
      }
      if (this.form.jenis_kelamin.length < 1) {
        alert('Field Jenis Kelamin belum di isi')
        return
      }
      const dosen = new DosenService(this.form.nidn, this.form.nama, this.form.jenis_kelamin)
      if (dosen.store()) {
        alert(`Data Dosen ${this.form.nama} berhasil disimpan`)
        return
      }
      alert(`Data Dosen ${this.form.nama} gagal disimpan`)
    }
  }
})
</script>
