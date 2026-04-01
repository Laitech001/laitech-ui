import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import { Form, TextInput } from "./components/ui/form";


export default function Home() {
  return (
    <>
      <Button varient="primary" size="medium">
        Click Me
      </Button>

      <Button varient="secondary" size="small">
        Click Me
      </Button>

      <Button varient="danger" size="large">
        Click me
      </Button>

      <section className="flex justify-center items-center gap-4 p-4">
        <Card className="hover:">
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p className="text-gray-700">This is a simple card component.</p>

        <Button>
          Click Me 
        </Button>
      </Card>

      <Card>
        <h2 className="text-xl font-bold mb-2">Another Card</h2>
        <p className="text-gray-700">This is another card component.</p>

        <Button varient="secondary">
          Click Me 
        </Button>
      </Card>
      </section>

      <Form>
        <h2 className="text-xl font-bold mb-4">Form Title</h2>

        <TextInput placeholder="Enter your name" size="small" />
      </Form>

    </>
  );
}
