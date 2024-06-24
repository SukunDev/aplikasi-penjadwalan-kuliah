export default class DosenService {
  nidn: number
  nama: string
  jenis_kelamin: string

  constructor(nidn: number, nama: string, jenis_kelamin: string) {
    this.nidn = nidn
    this.nama = nama
    this.jenis_kelamin = jenis_kelamin
  }

  store(): boolean {
    try {
      localStorage.setItem(
        'dosen',
        JSON.stringify({ nidn: this.nidn, nama: this.nama, jenis_kelamin: this.jenis_kelamin })
      )
      return true
    } catch (error) {
      return false
    }
  }
}
