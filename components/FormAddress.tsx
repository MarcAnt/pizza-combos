"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(150),
  address: z.string().min(2).max(150),
});

type AddressFormForm = z.infer<typeof schema>;

const FormAddress = () => {
  const {
    register,
    handleSubmit,
    // formState: { isValid },
  } = useForm<AddressFormForm>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: { address: "", name: "name" },
  });

  const onSubmit: SubmitHandler<AddressFormForm> = (data) => console.log(data);

  return (
    <div className="flex flex-col gap-3">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre:</label>
        <input
          className="border-2 border-primary text-gray-600 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 outline-none"
          type="text"
          placeholder="Nombre"
          id="name"
          tabIndex={0}
          {...register("name")}
        />
        <label htmlFor="address">Dirección:</label>
        <textarea
          className="resize-none border-2 border-primary text-gray-600 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 outline-none"
          placeholder="Av. Aragua, #123"
          tabIndex={0}
          id="address"
          {...register("address")}
        ></textarea>
      </form>
    </div>
  );
};

export default FormAddress;
