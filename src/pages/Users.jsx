import { useEffect, useState } from "react";
import UserCard from "../components/UserCard/UserCard";

// icons
import { IoSearch } from "react-icons/io5";
import UserAddModal from "../components/UserAddModal/UserAddModal";
import axios from "axios";

const Users = () => {
  // users state
  const [users, setUsers] = useState([]);

  // users state for searching
  const [userForSearch, setUserForSearch] = useState([])
  

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users)
      });
  }, []);

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.searchInput.value.toLowerCase();
    const sortBy = form.sortBy.value;

    if(!searchText){
      setUserForSearch([])
    }
    
    if (sortBy === "name" && searchText) {
      const searchedByName = users.find(
        (user) => user?.firstName.toLowerCase() === searchText
      );
      setUserForSearch([searchedByName])
   
      form.reset();
    } else if (sortBy === "email" && searchText) {
      const searchedByEmail = users.find(
        (user) => user?.email.toLowerCase() === searchText
      );
      setUserForSearch([searchedByEmail])
      form.reset();

   
    } else if(searchText) {
      const searchedByCompany = users.find(
        (user) => user?.company?.name.toLowerCase() === searchText
      );
      setUserForSearch([searchedByCompany])
      
      form.reset();
    }
  };

    // handle user creation modal form
    const handleAddUser = async(e)=>{
      e.preventDefault()
      const form = e.target;
      const firstName = form.firstName.value;
      const lastName = form.lastName.value;
      const email = form.email.value;
      const address = form.address.value;
      const company = form.company.value;
      const role = form.role.value;
      const imageFile = {image:form.image.files[0]};
    


      const dbResponse = await axios.post(import.meta.env.VITE_ImgbbURL, imageFile,{
        headers: {
            "content-type": "multipart/form-data",
        },
    })
      

      console.log(dbResponse?.data?.data?.display_url)

      const newUser = {firstName, lastName, email, address:{address}, company:{name: company, title: role}, }
      
  }

  return (
    <>
      <div className="h-16 bg-black"></div>
      <div className="">
        {/* heading and search bar */}
        <div className=" pt-12 pb-12 px-4">
          {/* heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-lime-700 text-center border-lime-400 lg:w-[550px] mx-auto animate-pulse mb-6 ">
            Welcome to your user database
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col items-start gap-4 justify-center md:flex-row md:items-center"
          >
            <div className="relative w-64 lg:w-80">
              <input
                type="text"
                placeholder="Search users"
                name="searchInput"
                className="input input-bordered input-success w-full"
              />
              <button type="submit">
                {" "}
                <IoSearch
                  className="absolute top-3 right-2 text-lime-600 hover:cursor-pointer"
                  size={25}
                />
              </button>
            </div>
            <select
              defaultValue="name"
              className="select select-success max-w-[150px] lg:max-w-[200px]"
              name="sortBy"
            >
              <option disabled value="default">
                Search by
              </option>
              <option value="name">Sort by name</option>
              <option value="email">Sort by email</option>
              <option value="company">Sort by company name</option>
            </select>
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="btn uppercase text-black bg-gradient-to-r from-amber-300 to-lime-500 border-none"
            >
              Add new user
            </button>
          </form>
          {/* modal */}
          <UserAddModal handleAddUser={handleAddUser}/>
        </div>
        <div className="max-w-screen-xl px-5 mx-auto grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0">

          {
            userForSearch.length ? userForSearch?.map((user)=> <UserCard key={user?.id} user={user} />) : users?.map((user)=> <UserCard key={user?.id} user={user}/>)
          }


        
        </div>
      </div>
    </>
  );
};
export default Users;
