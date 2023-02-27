const users=[
    {
    id: 1,
    firstName:"Sam",
    lastName:"Kiven",
    age:26,
    isActive: true,
    address: {
        street:"Kaivokatu",
         Building: 32,
         City: "Helsinki"
    }
   },
   {
   id: 2,
    firstName:"Siva",
    lastName:"Punjy",
    age:55,
    isActive: false,
    address: {
         street:"Poltokatu",
         Building: 22,
         City: "Vantaa"
      }
    },
    {
      id: 3,
      firstName:"Ram",
      lastName:"Kews",
      age:50,
      isActive: true,
    address: {
        street:"Saloltokatu",
        Building: 11,
        City: "Espoo"
     }
},
    {
      id: 4,
      firstName:"Ronaldo",
      lastName:"Cristiano",
      age:56,
      isActive: false,
    address: {
        street:"Jankikatu",
        Building: 2,
        City: "Helsinki"
     }
},  
  ];

//retun age from first user
console.log(users[0].age);

//return address of second user
console.log(users[1].address.street+" "+ users[1].address.Building+" "+ users[1].address.City);


  //Now for getting List of fullname
  const fullname=users.map((users)=>{
      return users.firstName+" "+users.lastName;
  })
  console.log(fullname);