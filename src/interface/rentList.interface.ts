export interface rentList {
	"results": [
		{
			"id": string,
			"start_date": string,
			"end_date": string,
			"client_data": {
				"id": string,
				"total_rentals": number,
				"user_data": {
					"id": number,
					"username": string,
					"name": string,
					"email": string
				}
			},
			"vehicle_data": {
				"id": string,
				"brand": string,
				"model": string,
				"year": number,
				"quantity": 0,
				"type_vehicle": string,
				"description": string,
				"is_available": boolean
			}
		}
	]
}
export interface Rent{
			"id": string,
			"start_date": string,
			"end_date": string,
			"client_data": {
				"id": string,
				"total_rentals": number,
				"user_data": {
					"id": number,
					"username": string,
					"name": string,
					"email": string
				}
			},
			"vehicle_data": {
				"id": string,
				"brand": string,
				"model": string,
				"year": number,
				"quantity": 0,
				"type_vehicle": string,
				"description": string,
				"is_available": boolean
			}
		}