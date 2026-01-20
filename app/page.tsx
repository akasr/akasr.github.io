import { Badge } from '@/components/ui/badge';
import { ArrowUpRightIcon } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <main className="m-auto w-[80%] md:w-[50%] mt-[5rem]">
        <section className="space-y-6 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hello, This is Akash</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            He is a Mechanical Engineering undergraduate at National Institute of Technology, Patna. He is currently
            diving deep into <span className="font-bold">backend development</span>, and practical software engineering
            through projects, open-source, and competitive programming. 📚 Outside tech, he enjoys reading — currently
            on{' '}
            <span className="italic text-blue-500">
              <a href="https://www.webnovel.com/book/my-house-of-horrors_11530348105422805" target="_blank">The House of Horrors.</a>{' '}
            </span>
            <Badge className="bg-green-500 text-white" asChild>
              <a href="https://www.goodreads.com/akasr" target="_blank">
                Goodreads
                <ArrowUpRightIcon data-icon="inline-end" />
              </a>
            </Badge>
          </p>
        </section>

        <section className="space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Feel free to connect with him on{' '}
            <a href="https://www.linkedin.com/in/akasr" target="_blank" className="text-blue-500">
              LinkedIn
            </a>{' '}
            or follow on{' '}
            <a href="https://github.com/akasr" target="_blank" className="text-blue-500">
              GitHub
            </a>{' '}
            if you&apos;re interested in his work or want to discuss a project. or you can{' '}
            <a href="mailto:rajakash.tech@gmail.com " className="text-blue-500">email</a> him directly.
          </p>
        </section>
      </main>
    </div>
  );
}
