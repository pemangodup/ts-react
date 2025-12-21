import { ReactNode, type ComponentPropsWithoutRef } from "react";

type FormProps = { children: ReactNode } & ComponentPropsWithoutRef<"form">;

export default function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>;
}
