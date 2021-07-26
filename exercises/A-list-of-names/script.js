function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  let renderDiv = document.createElement("div");
  for (const person in people) {
    peoplesNames = people[person].name;
    peoplesJobs = people[person].job;

    const markup = `
    
 <div class="person-description">
    <h1>
        ${peoplesNames}
    </h1>
    <h2>
        ${peoplesJobs}
    </h2>
 </div>
    `;
    document.body.innerHTML += markup;
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
