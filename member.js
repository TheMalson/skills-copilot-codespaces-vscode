function skillsMembers() {
  var members = [
    {
      name: "John",
      skills: ["JavaScript", "CSS", "HTML", "React"]
    },
    {
      name: "Jane",
      skills: ["JavaScript", "CSS", "HTML", "Angular"]
    },
    {
      name: "Jack",
      skills: ["JavaScript", "CSS", "HTML", "Node"]
    }
  ];

  var filteredMembers = members.filter(function(member) {
    var skills = member.skills;
    var hasReact = skills.some(function(skill) {
      return skill === "React";
    });
    return hasReact;
  });

  console.log(filteredMembers);
}