interface Show {
  show(): string;
}

const log = <A extends Show>(a: A) => console.log(a.show());
class Person implements Show {
  show(): string {
    return this.getFullName();
  }
  firstName: string;
  lastName: string;

  getFullName() {
    return this.firstName + this.lastName;
  }
}

type Person_ = Person_.T;
namespace Person_ {
  export interface T {
    firstName: string;
    lastName: string;
  }

  export const getFullName = (person: Person_) => {
    return person.firstName + person.lastName;
  };
}

declare const person: Person;
declare const person_: Person_;

person.getFullName();

Person_.getFullName(person_);
