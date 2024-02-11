const UserAddModal = () => {
  return (
    <div>
   
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        <form>

            <input type="text" name="" id="" />
            <button>Add User</button>
        </form>
        </div>
      </dialog>
    </div>
  );
};
export default UserAddModal;
