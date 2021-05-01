import Person from './person.js'

const People = (people) => {
    const count = people.length;
    console.log(count);
    return (
        <div>
            { people.map(Person) }
            <div>People count: { count }</div>
        </div>
      );
}

export default People;