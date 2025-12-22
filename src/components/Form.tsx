import {
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("Clearing...");
        form.current?.reset();
      },
    };
  });

  function formHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }

  return (
    <form onSubmit={formHandler} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
