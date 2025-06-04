import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type FieldValues } from "react-hook-form";
import type { FormProps } from "./Form.types";

export function Form<T extends FieldValues>({ schema, onSubmit, children, defaultValues }: FormProps<T>) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        {children}
      </form>
    </FormProvider>
  );
}