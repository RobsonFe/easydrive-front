"use client";
import Layout from "@/components/layout";
import { Rent } from "@/interface/rentList.interface";
import Service from "@/service/service";
import { useEffect, useState } from "react";
import RentCard from "./components";

const RentList = () => {
    const [rent, setRent] = useState<Rent[]>([]);
    const service = new Service();

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
            <div className="flex gap-4">
                <RentCard/>
            </div>
        </Layout>
    );
};

export default RentList;