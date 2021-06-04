class Contact
 {
    /*
      firstName;
      lastName;
      address;
      city;
      state;
      zip;
      phoneNumber;
      email;*/
      phoneNumber;
     //creating a constructor using var args
      constructor(...params)
       {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
      }
      get firstName() {return this._firstName;}
    set firstName(firstName) {
      let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{1,}$');
      if(firstNameRegex.test(firstName))
        this._firstName =firstName;
        else throw 'Invalid FirstName';
    }
  
    get lastName() {return this._lastName;}
    set lastName(lastName) {
      let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{1,}$');
      if (lastNameRegex.test(lastName)) 
        this._lastName = lastName;
      else throw 'Invalid LastName '   
      }
        
  
    get address() {return this._address;}
    set address(address) {
      let addressRegex = RegExp('^[0-9 A-Z]{1}[A-Z a-z 0-9]{1,}$');
      if (addressRegex.test(address))
      this._address = address;
      else throw 'Invalid Address'
    }
  
    get city() {return this._city;}
    set city(city) {
      let cityRegex = RegExp('^[A-Z]{1}[A-Z a-z]{1,}$');
      if(cityRegex.test(city))
        this._city = city;
      else throw 'Invalid City Name'
    }
  
    get state() {return this._state;}
    set state(state) {
      let stateRegex = RegExp('^[A-Z]{1}[A-Z a-z]{1,}$');
      if (stateRegex.test(state)) 
        this._state = state;
      else throw 'Invalid State Name'
    }
  
    get zip() {return this._zip;}
    set zip(zip) {
      let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
      if(zipRegex.test(zip))  
        this._zip = zip;
      else throw 'Invalid Zip'
      }
  
    get phoneNumber() {return this._phoneNumber;}
    set phoneNumber(phoneNumber) {
      let phoneNumberRegex = RegExp('^[1-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
      if(phoneNumberRegex.test(phoneNumber))
        this._phoneNumber = this.phoneNumber;
      else throw 'Invalid PhoneNumber'
    }
  
    get email() {return this._email;}
    set email(email) {
      let emailRegex = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$');
      if(emailRegex.test(email))
        this._email = email;
      else throw 'Invalid Email'  
    }
      //using to string to get output in desied manner
        toString() 
        {
           return "FirstName = "+ this.firstName +", LastName = "+this.lastName+", Address = "+this.address+", City ="+this.city+
           ", State = "+this.state+", Zip= "+this.zip+", PhoneNumber="+this.phoneNumber+", Email="+this.email;
        }
    }
    
    let contact=new Contact("Vishal","Singh","Bhandup",'Mumbai','Maharshtra','400078','91 9930315160','vishal@gmail.com');
    console.log(contact.toString());
     //using try catch block to check name validation for incorrect name
     try
     {
      contact.firstName = "james";
      console.log(contact.toString())
      }
      catch(e)
      {
        console.error(e);
    }
    //validation check for correct first name
      try{
        contact.firstName = "Nishad";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for incorrect last name
      try{
        contact.lastName = "mathew";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for correct last name
      try{
        contact.lastName = "Vairagi";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for incorrect address
      try{
        contact.address = "_thmhd";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for correct address
      try{
        contact.address = "PoojaComplex";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for incorrect city
      try{
        contact.city = "pen";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for correct city
      try{
        contact.city = "Pen";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for incorrect state
      try{
        contact.state = "0mh";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for correct state
      try{
        contact.state = "MH";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for incorrect zip
      try{
        contact.zip = "a1234";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for correct zip
      try{
        contact.zip = "402107";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for incorrect phone number
      try{
        contact.phoneNumber = "02107";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for correct phone number
      try{
        contact.phoneNumber = "91 9028626816";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for incorrect email id
      try{
        contact.email = "@amar@123.in";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
      //using try catch block to check name validation for correct emailid
      try{
        contact.email = "nishad@gmail.com";
        console.log(contact.toString())
        }catch(e){
          console.error(e);
      }
       //UC3-Ability to create new addressbook array and add contact to it
    //creating a new array
    let addressBookArr = new Array();
    try
    {
      let personContact1 = new Contact('Swaraj', 'Mhatre', 'Pen', 'Pen', 'MH', '402107', '91 9999999999', 'swr@gmail.com')
      let personContact2 = new Contact('Mayur', 'Pawar', 'Kharghar', 'Mumbai', 'MH', '402107', '91 9898989898', 'mayur@gmail.com')
      addressBookArr.push(personContact1);
      addressBookArr.push(personContact2);
    }
    catch(e)
    {
      console.error(e);
    }
    console.log(addressBookArr);

       //UC4-Find person by contact
    //creating a function to find cintact by name and passing contact as a parameter
    function findFirstName(contact)
    {
        return contact.firstName.includes("Swaraj")
    }
    console.log(addressBookArr.find(findFirstName))

    //UC-5 delete contact fro  addressbook
    //using filter and arrow function
    addressBookArr = addressBookArr.filter((e) => e._firstName != 'Swaraj');
    console.log("Array After Deleting Contact: ",addressBookArr);

    //UC-6 To find the Number of contacts in the array
    //using array's length method to find number of contacts
    let numberOfContacts = addressBookArr.length;
    console.log("Number of Contacts are: "+numberOfContacts);

    //UC-7 To prevent duplicate entry in the Array
    //adding duplicate entry to array
    //with if statement and arrow function checking if contact already exists or not
    let personContact3 = new Contact('Swaraj', 'Mhatre', 'Vashi', 'Mumbai', 'MH', '411091', '91 9111111111', 'swaraj@gmail.com')
    if(!addressBookArr.some(el => el._firstname != "Swaraj"))
        addressBookArr.push(personContact3);
    else
      console.log("Contact already Exists!");

    console.log("Array: ",addressBookArr);

    //UC-8 To Find for the Person in the Address Book 
    //finding contacts by city
    let findByCity = addressBookArr.filter((e) => e._city == 'Pen');
    console.log("Contacts by city: ",findByCity);
    //finding contacts by state
    let findByState = addressBookArr.filter((e) => e._state == 'MH');
    console.log("Contacts by state: ",findByState);	

        //UC-9 view contact name by city and state
    //applying filter and arrow function and map to get contact
    console.log(addressBookArr.filter(contact => contact._city == "Pen")
                                 .map(contact => contact.firstName))
                        
    console.log(addressBookArr.filter(contact => contact._state == "MH")
                               .map(contact => contact._firstName))

    //UC10-Get contact count by city and state
    //applying filter, arrow , reduce function to get count
    console.log(addressBookArr.filter(contact => contact.city == "Pen")
                          .reduce((count, contact) => contact.firstName ? ++count : count, 0))
    //count by state
    console.log(addressBookArr.filter(contact => contact.state == "MH")
                              .reduce((count, contact) => contact.firstName ? ++count : count, 0))
    
    //UC11-Sorting entries alphabetically
    console.log(addressBookArr.sort((a, b) => a.firstName.localeCompare(b.firstName)));

    //UC12-Sorting contacts by city state and zip
    console.log("Contact After sorting by city");
    console.log(addressBookArr.sort((a, b) => a.city.localeCompare(b.city)))
    console.log("Contact After sorting by state");
    console.log(addressBookArr.sort((a, b) => a.state.localeCompare(b.state)));
    console.log("Contact After sorting by zip");
    console.log(addressBookArr.sort((a, b) => a.zip.localeCompare(b.zip)));