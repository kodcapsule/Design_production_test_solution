import { useState } from "react";
import Button from "./Button";

import { FaPlus } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import { addUser } from "../../api/endPoints";
import { generateId } from "./helpers/generateId";
import { toast } from "react-hot-toast";

function CreateUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User Added successfully");
    },
    onError: () => {
      toast.error("Could not add User");
    },
  });

  // Submitting user details to server
  function handleFormSubmission(e) {
    e.preventDefault();
    console.log(generateId());
    mutate({
      id: generateId(),
      name,
      email,
      password,
      confirmPassword,
      role,
    });
  }

  return (
    <form
      className=" flex flex-col gap-4 justify-center"
      onSubmit={handleFormSubmission}
    >
      <div className="input-group ">
        <label htmlFor="">Name</label>
        <input
          className=" text__input"
          type="text"
          placeholder="Enter name of user here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Organization email</label>
        <input
          className=" text__input"
          type="email"
          placeholder="username@business.org"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Password</label>
        <input
          className=" text__input"
          type="password"
          placeholder="Enter strong password here"
          autoComplete="on"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Confirm password</label>
        <input
          className=" text__input"
          type="password"
          placeholder="Repeat strong password here"
          autoComplete="on"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="input-group mb-5">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="text__input"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select role here</option>
          <option value="Administrator">Administrator</option>
          <option value="Back Office">Back Office</option>
          <option value="Front Office">Front Office</option>
          <option value="Payments">Payments</option>
        </select>
      </div>

      <Button handleClick={handleFormSubmission}>
        <div className=" flex justify-center items-center gap-2 ">
          <span className=" text-[10px]">
            <FaPlus />
          </span>
          <span>create user</span>
        </div>
      </Button>
    </form>
  );
}

export default CreateUserForm;
