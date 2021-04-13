import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {

  contacts = [
    {
        id: 1,
        name: 'Amy Taylor',
        title: 'VP of Engineering',
    },
    {
        id: 2,
        name: 'Michael Jones',
        title: 'VP of Sales',
    },
    {
        id: 3,
        name: 'Jennifer Wu',
        title: 'CEO',
    },
  ];

  lastId = 3;

  // make data binding reactive
  @track greeting = 'World';

  @track showing = true;

  constructor() {
    super();
    window.HelloWorld = 'Hello World';
  }

  // computed property
  get greetingUpper() {
    return this.greeting.toUpperCase();
  }

  changeHandler(event) {
    this.greeting = event.target.value;
  }

  handleShowChange() {
    this.showing = !this.showing;
  }

  handleClick() {
    const id = this.lastId + 1;
    const contact = {
      id,
      name: 'New Name',
      title: 'New Title'
    };
    this.lastId = id;
    this.contacts = [...this.contacts, contact];
  }
}