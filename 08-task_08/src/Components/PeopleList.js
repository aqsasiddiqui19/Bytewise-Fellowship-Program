import React from 'react'
function PeopleList() {
    const peoples = [
{id:1,
name:'Saira',
subject:'Math',
marks:40
},

{id:2,
    name:'Maria',
    subject:'Math',
    marks:60

},

{id:3,
    name:'Sania',
    subject:'Math',
    marks:70

},

{id:4,
    name:'Monia',
    subject:'Math',
    marks:90

},
 ]

const peopleList = peoples.filter(people =>people.marks>40).map(people =>
   <li key={people.id}>{people.name}, {people.subject}, {people.marks},</li> 
    
    )
 
return <div>
    <h1>RENDREING LIST</h1>
<ul
><h3>{peopleList}</h3>
</ul>
</div>
}


export default PeopleList