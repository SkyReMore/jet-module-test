import table from '../src/table';

class HelloWorld {
  message = 'Hello World';
  print = () => this.message;
}

const hello = new HelloWorld();
// eslint-disable-next-line no-console
console.log(
  `%c ${hello.print()}`,
  `color: green; font-size:48px; weight: bold`,
);

table.test();
