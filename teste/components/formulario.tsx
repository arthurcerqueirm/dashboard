"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils" // caso esteja usando a função utilitária do shadcn
import { Separator } from "@/components/ui/separator"

// Definindo o tipo dos dados do formulário
interface RegisterFormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  terms: boolean
}

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  })

  function onSubmit(data: RegisterFormValues) {
    // Lógica para criar conta, chamar API, etc.
    console.log("Dados do formulário:", data)
  }

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-sm flex-col gap-4 rounded-md  p-6 text-white"
      )}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
        {/* Primeiro nome */}
        <div className="flex justify-start">
            <div className="flex flex-col justify-between">
            
            <Input
                id="firstName"
                placeholder="Nome"
                className="w-[90%] bg-[#453e58] focus:border-blue-300 border-none"
                {...register("firstName", { required: true })}
            />
            {errors.firstName && (
                <p className="text-sm text-red-500">First name é obrigatório.</p>
            )}
            </div>

            {/* Último nome */}
            <div className="flex flex-col">
            
            <Input
                id="lastName"
                placeholder="Sobrenome"
                className="w-full bg-[#453e58] focus:border-blue-300 border-none"
                {...register("lastName", { required: true })}
            />
            {errors.lastName && (
                <p className="text-sm text-red-500">Sobrenome é obrigatório.</p>
            )}
            </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
         
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full bg-[#453e58] focus:border-blue-300 border-none"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">Email é obrigatório.</p>
          )}
        </div>

        {/* Senha */}
        <div className="flex flex-col">
        
          <Input
            id="password"
            type="password"
            placeholder="Senha"
            className="w-full bg-[#453e58] focus:border-blue-300 border-none"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-sm text-red-500">Senha é obrigatório.</p>
          )}
        </div>

        {/* Checkbox de termos */}
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" {...register("terms", { required: true })} className="" />
          <Label htmlFor="terms" className="text-sm">
            Eu aceito os Termos e Condições
          </Label>
        </div>
        {errors.terms && (
          <p className="text-sm text-red-500">
            Você precisa aceitar os termos.
          </p>
        )}

        {/* Botão de criar conta */}
        <Button type="submit" className="mt-4 w-full bg-[#6e54b5]">
          Criar Conta
        </Button>
      </form>

      {/* Ou registre-se com... */}
      <Separator className="my-4" />
      <div className="flex items-center justify-center gap-2 ">
        <Button variant="outline" className="w-full bg-[#2b2738]">
          Google
        </Button>
        <Button variant="outline" className="w-full bg-[#2b2738]">
          Apple
        </Button>
      </div>
    </div>
  )
}
