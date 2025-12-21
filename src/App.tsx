import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Form>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button el="button">Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
