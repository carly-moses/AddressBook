"use strict"
{

    class AddressBook {
        constructor () {
            this.contacts = []; 
        }

        add () {
            const addContact = new Contact(name.value, email.value, phone.value, relation.value);
            this.contacts.push(addContact);
        }  
 
        display () {
            let contact_section = document.getElementById("contacts");

            //Create HTML elements to add
            let div = document.createElement("div");
            let info = document.createElement("p");
            let icon = document.createElement ("i"); 

            //Add CSS classes to created HTML elements
            div.classList.add("contact1"); 
            icon.classList.add("material-icons"); 
            icon.classList.add("delete"); 

            //Adding Text
            icon.innerText = "delete";
            info.innerText =`
            Name: ${name.value}
            Phone: ${phone.value}
            Email: ${email.value}
            Relation: ${relation.value}
          `;

            //Appending info to div and div to contact section
            div.appendChild(info);
            div.appendChild(icon); 
            contact_section.appendChild(div); 


            icon.addEventListener("click", () => {
                div.remove(); 
            });
            
        }
    
        deleteAt () {
            //Must complete-have not figured it out
        }
    }


    class Contact{
        constructor (name, email, phone, relation) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.relation = relation; 
            this.indexValue = ""; 
    
        }
    }
  
    const book = new AddressBook(); 
    
    let name = document.querySelector("#name"); 
    let email = document.querySelector("#email"); 
    let phone = document.querySelector("#phone"); 
    let relation = document.querySelector("#relation"); 
    let addBtn = document.querySelector("#add"); 
    //let form = document.querySelector("#enterinfo"); Use if I want to try to enter form info with "enter" button
 

    addBtn.addEventListener("click", () => {
        book.add();
        book.display();
        name.value = "";
        email.value = "";
        phone.value = "";
        relation.value = "";
      }); 

     

}
//onsubmit to create an alert once item added

//****LAB NOTES */
// const person = {
//     name: "",
//     email: "",
//     phone: "", 
//     relation: ""
// }; 
// const person = {
// name: "adam"
// address: "86349844"
// phone: "kjegf"
// relation: "jefhwe"
//};
//


//for (let i=0; i < 2; i++)
// const newContact = document.createElement ("div");
// newContact.innerHTML = `
//     <p> Name: ${person.name} </p>
//     <p> Phone: ${person.phone} </p>
//     <p> Email: ${person.name} </p>
//     <p> Relation: ${person.relation} </p>
//    `
   //document.body.appendChild(contact); 
// }
   // append to p tags - app new div to body - an array means you need a loop to catch lines 28-32





