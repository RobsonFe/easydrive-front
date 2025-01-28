"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Service from "@/service/service"

const RegisterVehicleForm = () => {
  const service = new Service()

  const vehicleSchema = z.object({
    brand: z.string().nonempty(),
    model: z.string().nonempty(),
    year: z.string().nonempty(),
    type: z.enum(["car", "motorcycle"]),
    quantity: z.number().int().positive(),
    description: z.string().optional(),
  })

  const { register, handleSubmit, reset } = useForm<Vehicle>({
    resolver: zodResolver(vehicleSchema),
  })

  type Vehicle = z.infer<typeof vehicleSchema>

  function onSubmit(data: Vehicle) {
    console.log(data)
    service.vehicleCreate(data)
    reset()
  }

  return (
    <section className="z-20 flex border-t border-gray-800 shadow-md bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Na Easy Drive, oferecemos uma ampla variedade de veículos para
              aluguel, garantindo que você encontre o carro perfeito para suas
              necessidades. Nossa independência de fabricantes e grupos de
              controle nos permite recomendar apenas o que é melhor para você,
              proporcionando confiança e tranquilidade em sua escolha.
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-pink-600">
                {" "}
                (81) 1234-5678
              </a>

              <address className="mt-2 not-italic">
                Av. Boa Viagem, 1234, Recife, PE 51020-000
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-[#3333] p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form
              action="#"
              className="space-y-4 overflow-y-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="rounded-lg">
                <label className="sr-only" htmlFor="brand">
                  Marca
                </label>
                <input
                  className="w-full rounded-lg border-[#212121] p-3 text-sm"
                  placeholder="Marca"
                  type="text"
                  id="brand"
                  {...register("brand")}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="model">
                    Modelo
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Modelo"
                    type="text"
                    id="model"
                    {...register("model")}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="year">
                    Ano
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Ano"
                    type="text"
                    id="year"
                    {...register("year")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="car"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="car"
                      type="radio"
                      tabIndex={-1}
                      value="car"
                      {...register("type")}
                    />

                    <span className="text-sm"> Carro </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="motorcycle"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="motorcycle"
                      type="radio"
                      tabIndex={-1}
                      value="motorcycle"
                      {...register("type")}
                    />

                    <span className="text-sm"> Moto </span>
                  </label>
                </div>
                <div>
                  <label className="sr-only" htmlFor="quantity">
                    Quantidade
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Quantidade"
                    type="number"
                    id="quantity"
                    {...register("quantity")}
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="description">
                  Descrição
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Descrição"
                  rows={8}
                  id="description"
                  {...register("description")}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterVehicleForm
