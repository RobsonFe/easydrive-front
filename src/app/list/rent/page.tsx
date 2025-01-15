"use client";
import Layout from "@/components/layout";
import { Rent } from "@/interface/rentList.interface";
import Service from "@/service/service";
import { useEffect, useState } from "react";
import RentCard from "./components";

const RentList = () => {

    const service = new Service();
    const [rent, setRent] = useState<Rent[]>([{
        id: "",
        start_date: "",
        end_date: "",
        client_data: {
            id: "",
            total_rentals: 0,
            user_data: {
                id: 0,
                username: "",
                name: "",
                email: ""
            }
        },
        vehicle_data: {
            id: "",
            brand: "",
            model: "",
            year: 0,
            quantity: 0,
            type_vehicle: "",
            description: "",
            is_available: false
        }
    }]);
    
        useEffect(() => {
            const fetchRent = async () => {
                try {
                    const response = await service.rentList();
                    setRent(response);
                } catch (error) {
                    console.error("Erro ao buscar aluguéis:", error);
                }
            };
    
            fetchRent();
        }, []);

    return (
        <Layout title="Lista de Alugueis">
            <div className="flex flex-wrap gap-3">
                {rent.map((rent) => (
                    <RentCard
                        key={rent.id}
                        nome={rent.client_data.user_data.name}
                        email={rent.client_data.user_data.email}
                        username={rent.client_data.user_data.username}
                        veiculo={rent.vehicle_data.model}
                        marca={rent.vehicle_data.brand}
                        ano={rent.vehicle_data.year}
                        quantidade={rent.vehicle_data.quantity}
                        tipo={rent.vehicle_data.type_vehicle}
                        descricao={rent.vehicle_data.description}
                        dataDeInicio={rent.start_date}
                        dataFinal={rent.end_date}
                        is_available={rent.vehicle_data.is_available}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default RentList;