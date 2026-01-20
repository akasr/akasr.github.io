import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

function Projects() {
  return (
    <main className="m-auto w-[80%] md:w-[50%] mt-[5rem]">
      <section className="space-y-6 mb-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
        <Field className="w-full max-w-sm">
          <FieldLabel htmlFor="progress-developed">
            <span>In development...</span>
            <span className="ml-auto">69%</span>
          </FieldLabel>
          <Progress value={69} id="progress-developed"/>
        </Field>
      </section>
    </main>
  );
}

export default Projects;