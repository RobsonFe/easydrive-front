import axios from "axios"

class Service {
  private api: string

  constructor(api: string = "http://127.0.0.1:8000/api/v1/") {
    this.api = api
  }

  async rentList() {
    try {
      const response = await axios.get(`${this.api}rent/list/`)
      const result = response.data.results
      return result
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro na requisição:", error.message)
      } else {
        console.error("Erro inesperado:", error)
      }
      throw error
    }
  }

  async vehicleCreate(data: any) {
    try {
      const response = await axios.post(`${this.api}vehicle/create/`, data)
      if (response.status === 201 || response.status === 200) {
        return response.data
      }
    } catch (error: any) {
      if (axios.isAxiosError(error) || error.response.status !== 201) {
        console.error("Erro na requisição:", error.message)
      } else {
        console.error("Erro inesperado:", error)
      }
      throw error
    }
  }

  async userInfo() {
    try {
      const response = await axios.get(`${this.api}client/user/list/`)
      console.log(response.data.results)
      return response.data.results
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro na requisição:", error.message)
      } else {
        console.error("Erro inesperado:", error)
      }
      throw error
    }
  }
}
export default Service
