"use strict"
{

    class AddressBook {
        constructor (contact) {
            this.contact = [{name: "Sarah", email: "sarah@gmail.com", phone: "248-111-2222", relation:"friend"},
            {name: "Leah", email: "leah@gmail.com", phone: "248-111-3333", relation:"friend"},
            {name: "Kevin", email: "kevin@gmail.com", phone: "248-111-4444", relation:"friend"},
            {name: "Evan", email: "evan@gmail.com", phone: "248-111-5555", relation:"friend"}]
        }

        add (info) {
            let newContact = new  Contact(info.name, info.email, info.phone, info.relation);
            this.contact.push(newContact);
            console.log(book);  
        }

//***************************deleteAt(index)************************** */
        deleteAt(index) {
            this.contact.splice (index,1); 
            console.log(book); 
        }

//*************************deleteByName ********************************/
        deleteByName(name){
            for (let i=0; i < book.contact.length;i++) {
                if (book.contact[i].name === name) {
                    this.contact.splice (i,1); 
                }
            }
        }    
        
        print () {
            this.contact.forEach((print)=> {
            console.log (`Name: ${print.name}\n Email: ${print.email}\n Phone: ${print.phone}\n Relation: ${print.relation}`);
            });
        }
        
    }

    class Contact{
        constructor (name, email, phone, relation) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.relation = relation; 
        }
    }
 
const book = new AddressBook(); 

    while (true) {
        let option = prompt ("Would you like to add, delete by index, delete by name, print, or quit?");
        if (option.toLowerCase () === "add") {
            let info = {
                name: prompt ("Insert: Name"),
                email: prompt ("Insert: Email"),
                phone: prompt ("Insert: Phone"),
                relation: prompt ("Insert: Relation")};
            book.add(info); 
        } else if (option.toLowerCase() === "delete by index") {
            let index = prompt ("Insert Index to Delete"); 
            book.deleteAt(index); 
        } else if (option.toLocaleLowerCase() === "delete by name") {
            let name = prompt ("Insert Name to Delete");
            book.deleteByName(name); 
        } else if (option.toLowerCase() === "print") {
            book.print();
        } else if (option === "quit") {
            console.log ("No more contacts? Bummer. Maybe later."); 
            break; 
        }
    }
}
