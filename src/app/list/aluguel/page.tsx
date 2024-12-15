"use client";
import Layout from "@/components/layout";
import axios from "axios";
import { useEffect, useState } from "react";

const AluguelList = () => {
    const [aluguel, setAluguel] = useState([]);

    useEffect(() => {
        const fetchAluguel = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/rent/list/");
                console.log(response.data.results);
                setAluguel(response.data.results);
            } catch (error) {
							console.error("Erro ao buscar dados de aluguel:", error);
                            const err = error as any;
                            console.error(`Erro ${err.response.status}: ${err.response.data}`);
            }
        };

        fetchAluguel();
    }, []);

    return (
        <Layout title="Lista de Alugueis">
            <div className="flex flex-col gap-4">
                {aluguel.map((aluguel) => (
                    <div key={aluguel.id} className="flex flex-col gap-2 p-4 bg-white shadow-md rounded-md">
                        <div>
                            <span className="font-semibold">Nome:</span> {aluguel.client_data.user_data.name}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default AluguelList;