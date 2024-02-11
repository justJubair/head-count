import { useEffect, useState } from "react";
import UserCard from "../components/UserCard/UserCard";

// icons
import { IoSearch } from "react-icons/io5";
import UserAddModal from "../components/UserAddModal/UserAddModal";
import axios from "axios";
import toast from "react-hot-toast";

const Users = () => {
  // users state
  const [users, setUsers] = useState([]);

  // users state for searching
  const [userForSearch, setUserForSearch] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  // handle search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.searchInput.value.toLowerCase();
    // const sortBy = form.sortBy.value;

    // search functionality
    if (!searchText) {
      setUserForSearch([]);
    } else {
      const searchedByName = users.find(
        (user) => user?.firstName.toLowerCase() === searchText
      );

      setUserForSearch([searchedByName]);
      form.reset();
    }

   
  };

  // handle user sorting
  const handleSortUser = (e)=>{
     
      if(e.target.value === "name"){
        const sortedDataByName = [...users].sort((a,b)=>{
          return a.firstName.localeCompare(b.firstName);
        })
  
        setUsers(sortedDataByName)
      } else if(e.target.value === "email"){
        const sortedDataByEmail = [...users].sort((a,b)=>{
          return a.email.localeCompare(b.email);
        })

        setUsers(sortedDataByEmail)
      } else if(e.target.value === "company"){
        const sortedDataByCompany = [...users].sort((a,b)=>{
          return a.company.name.localeCompare(b.company.name)
        })

        setUsers(sortedDataByCompany)
      }
     
  }

  // handle user creation modal form
  const handleAddUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const address = form.address.value;
    const company = form.company.value;
    const role = form.role.value;
    const imageFile = { image: form.image.files[0] };
    const id = Math.floor(Math.random() * 200);

    const dbResponse = await axios.post(
      import.meta.env.VITE_ImgbbURL,
      imageFile,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );

    const image = dbResponse?.data?.data?.display_url;

    if (image) {
      const newUser = {
        id,
        firstName,
        lastName,
        email,
        image,
        address: { address },
        company: { name: company, title: role },
      };

      setUsers([...users, newUser]);
      toast.success(`${firstName} has been added successfully`);
      form.reset();
    }
  };


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

          <div className="flex flex-col items-start gap-4 justify-center md:flex-row md:items-center">
            {/* search user form */}
            <form onSubmit={handleSearch}>
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
            </form>

            {/* sort users */}
            <select
              onChange={handleSortUser}
              defaultValue="default"
              className="select select-success max-w-[150px] lg:max-w-[180px]"
              name="sortBy"
            >
              <option disabled value="default">
                Sort users
              </option>
              <option value="name">Sort by name</option>
              <option value="email">Sort by email</option>
              <option value="company">Sort by company name</option>
            </select>

            {/* add new user button */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="btn uppercase text-black bg-gradient-to-r from-amber-300 to-lime-500 border-none"
            >
              Add new user
            </button>
          </div>

          {/* modal */}
          <UserAddModal handleAddUser={handleAddUser} />
        </div>
        <div className="max-w-screen-xl px-5 mx-auto grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0">
          {userForSearch.length
            ? userForSearch?.map((user) => (
                <UserCard key={user?.id} user={user} />
              ))
            : users?.map((user) => <UserCard key={user?.id} user={user} />)}
        </div>
      </div>
    </>
  );
};
export default Users;
