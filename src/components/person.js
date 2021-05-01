const Person = (data) => {
    //console.log(person);
    return (
      <div
        style = {{
          background: data.color,
          border: "1 px solid black"
        }}>
        Hello! { data.name }. Your age is { data.age }
      </div>
    )
  }

  export default (Person);