{
  // ======================= starts =====================

  type NormalUser = {
    name : string
  }
  type Manager = {
    name: string;
    role: "admin";
  };

  const manager: Manager = {
    name: "Rafiq",
    role: "admin",
  };
  

  const getUser = (user:NormalUser | Manager) : void=> { 

    if("role" in user){
        console.log(`normal user name is : ${user.role}`);
    }else{
        console.log("error khaw baba");
    }
   }

   getUser(manager)
  // ======================= ends =====================
}
