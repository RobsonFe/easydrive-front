import Service from "@/service/service";
import { createContext, useEffect, useState } from "react";

interface UserInfo { 
	id: string,
		total_rentals: number,
		user_data: {
			id: number,
			username: string,
			name: string,
			email: string,
		}
}

const UserInfoContext = createContext<UserInfo | null>(null);

export function UserInfoContextProvider({ children }: { children: React.ReactNode }) {

	const service = new Service();
	
	const [userInfo, setUserInfo] = useState<UserInfo | null>({
		id: "",
		total_rentals: 0,
		user_data: {
			id: 0,
			username: "",
			name: "",
			email: "",
		},
	});

	useEffect(() => { 
		const fetchUserInfo = async () => { 
			try { 
				const response = await service.userInfo();
				console.log(response);
				setUserInfo(response);
			} catch (error) { 
				console.error("Erro ao buscar informações do usuário:", error);
			}
		};
		fetchUserInfo();
	}, []);

	return (
		<UserInfoContext.Provider value={userInfo}>
			{children}
		</UserInfoContext.Provider>
	);
}