const UserAddModal = () => {
  return (
    <div>
   
      <dialog id="my_modal_3" className="modal glass">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* Heading */}
          <h1 className="text-center text-xl font-medium">Add New User</h1>
        <form  className="p-4 space-y-4">
            
        {/* first and last name */}
        <div className="flex items-center gap-3">
        <input name="firstName" type="text" placeholder="First Name" className="input input-bordered input-success w-full max-w-xs" />
        <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-success w-full max-w-xs" />
        </div>

        {/* Email and address */}
        <div className="flex items-center gap-3">
        <input name="email" type="email" placeholder="Email" className="input input-bordered input-success w-full max-w-xs" />
        <input name="address" type="text" placeholder="Address" className="input input-bordered input-success w-full max-w-xs" />
        </div>

        {/* company name and role */}
        <div className="flex items-center gap-3">
        <input name="company" type="text" placeholder="Company name" className="input input-bordered input-success w-full max-w-xs" />
        <input name="role" type="text" placeholder="Designation" className="input input-bordered input-success w-full max-w-xs" />
        </div>

        {/* user image */}
       <div className="flex flex-col gap-1 pb-4">
       <span className="label-text">Upload your image</span>
        <input name="image" type="file" className="file-input file-input-bordered file-input-success w-full max-w-[280px]" />
       </div>
       
            <button className="btn btn-block" type="submit">Add User</button>
        </form>
        </div>
      </dialog>
    </div>
  );
};
export default UserAddModal;
