"use client";
import Layout from "@/components/layout";
import { Rent } from "@/interface/rentList.interface";
import axios from "axios";
import { useEffect, useState } from "react";

const RentList = () => {
    const [rent, setRent] = useState<Rent[]>([]);

    useEffect(() => {
        const fetchRent = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/rent/list/");
                console.log(response.data.results);
                setRent(response.data.results);
            } catch (error) {
							console.error("Erro ao buscar dados de aluguel:", error);
                            const err = error as any;
                            console.error(`Erro ${err.response.status}: ${err.response.data}`);
            }
        };

        fetchRent();
    }, []);

    return (
        <Layout title="Lista de Alugueis">
            <div className="flex flex-col gap-4">
                {rent.map((rent) => (
                    <div key={rent.id} className="flex flex-col gap-2 p-4 bg-slate-400 shadow-md rounded-md">
                        <h3 className="flex justify-center items-center font-bold">Dados do Cliente</h3>
                        <div>
                            <span className="font-semibold">Username:</span> {rent.client_data.user_data.username}
                        </div>
                        <div>
                            <span className="font-semibold">Nome:</span> {rent.client_data.user_data.name}
                        </div>
                        <div>
                            <span className="font-semibold">Email:</span> {rent.client_data.user_data.email}
                        </div>
                        <hr className="mt-3" />
                        <h3 className="flex justify-center items-center font-bold mt-3">Veiculo Alugado</h3>
                        <div>
                            <span className="font-semibold">Marca:</span> {rent.vehicle_data.brand}
                        </div>
                        <div>
                            <span className="font-semibold">Modelo:</span> {rent.vehicle_data.model}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default RentList;