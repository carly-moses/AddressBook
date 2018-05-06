"use strict"
{

    class AddressBook {
        constructor (/*contact*/) {
            this.contact = [{name: "Sarah", email: "sarah@gmail.com", phone: "248-111-2222", relation:"friend"}];
        }

        add () {
            const addContact = new Contact(name.value, email.value, phone.value, relation.value);
            this.contact.push(addContact);
        }  
 
        display () {
            let contact_section = document.getElementByClassName("contacts");
            
            for (let i=0; i < 2; i++) {
            const newContact = document.createElement("div");
            let icon = document.createElement("i");
            newContact.innerHTML = `
                <p> Name: ${name.value} </p>
                <p> Phone: ${phone.value} </p>
                <p> Email: ${email.value} </p>
                <p> Relation: ${relation.value} </p>
              `
            }

            newContact.appendChild(contact_section); 
            newContact.appendChild(icon); 
            
            div.classList.add("contact_container"); 
            icon.classList.add("material-icons"); 
            icon.classList.add("delete"); 

        }
    
        deleteAt () {
            icon.addEventListener("click", () => {
                div.remove(); 
              });
            }
    }
    // let name = document.querySelector("#name"); 
    // let email = document.querySelector("#email"); 
    // let number = document.querySelector("#phone"); 
    // let relation = document.querySelector("#relation"); 
    let addBtn = document.querySelector("#add"); 

    const book = new AddressBook(); 
    

    class Contact{
        constructor (name, email, phone, relation) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.relation = relation; 
    
        }
    }

    addBtn.addEventListener("click", () => {
        book.add();
        book.display();
      }); 

     

}
//onsubmit to create an alert once item added


// const form = document.getElementByID("enterinfo").submit();
// console.log (form.id); 
// for (i = 0; i < x.length ;i++) {
//     const newContact = document.createElement ("div");
//     contact.innerHTML = `
//         <p> Name: ${person.name} </p>
//         <p> Phone: ${person.phone} </p>
//         <p> Email: ${person.name} </p>
//         <p> Relation: ${person.relation} </p>
//         `
// }

//     //document.getElementById("demo").innerHTML = text;
//     document.getElementsByClassName(contacts).appendChild(newContact);



//const form = document.getElementsByClassName(enterinfo);

 
// const person = {
//     name: "",
//     email: "",
//     phone: "", 
//     relation: ""
// }; 

//for (let i=0; i < 2; i++)
// const newContact = document.createElement ("div");
// newContact.innerHTML = `
//     <p> Name: ${person.name} </p>
//     <p> Phone: ${person.phone} </p>
//     <p> Email: ${person.name} </p>
//     <p> Relation: ${person.relation} </p>
//     `




///****LAB NOTES */

// const person = {
// name: "adam"
// address: "86349844"
// phone: "kjegf"
// relation: "jefhwe"
//};
//
//
//for (let i=0, i <array.length, i++  )
    //const contact = document.createElement ("div");
    //contact.innerHTML = `
//<p> Name: ${person.name} </p>
//<p> Phone: ${person.phones}
//<p> 
//`
   //document.body.appendChild(contact); 
// }
   // append to p tags - app new div to body - an array means you need a loop to catch lines 28-32


   //Google searches
//create a new elem in js 
//loop through array create new elem for each array
//create elem inside of an array




