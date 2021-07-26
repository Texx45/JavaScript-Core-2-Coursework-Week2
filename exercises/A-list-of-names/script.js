function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  let renderDiv = document.createElement("div");
  for (const person in people) {
    peoplesNames = people[person].name;
    peoplesJobs = people[person].job;

    const markup = `
    
 <div class="person-description">
 <ul>
    <li>
        ${peoplesNames}
    </li>
    <li>
        ${peoplesJobs}
    </li>
    </ul>
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
