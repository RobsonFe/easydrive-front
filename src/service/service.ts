import axios from "axios";

class Service {
    private api: string;

     constructor(api: string = 'http://127.0.0.1:8000/api/v1/') {
        this.api = api;
    }
    
    async rentList() {
        try {
            const response = await axios.get(`${this.api}rent/list/`);
					const result = response.data.results;
					console.log(result);
            return result;
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erro na requisição:', error.message);
            } else {
                console.error('Erro inesperado:', error);
            }
            throw error;
        }
    }

    async userInfo() {
        try {
            const response = await axios.get(`${this.api}client/user/list/`);
            return response.data.results;

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erro na requisição:', error.message);
            } else {
                console.error('Erro inesperado:', error);
            }
            throw error;
        }
    }
}
export default Service;