import React, { useEffect } from "react";
import "../css/CreateServer.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  setName,
  setPassword,
  setDescription,
  setPicture,
  setAdmin,
} from "../redux/reducers/serverFormSlice";
import { postServer } from "../redux/reducers/serverSlice";

const CreateServer = () => {
  const dispatch = useDispatch();
  const serverForm = useSelector((state) => state.serverForm);
  const name = useSelector((state) => state.serverForm.name);
  const password = useSelector((state) => state.serverForm.password);
  const description = useSelector((state) => state.serverForm.description);
  const picture = useSelector((state) => state.serverForm.picture);
  const admin = useSelector((state) => state.serverForm.admin);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name, password, description, picture, admin },
  });

  const onSubmit = (data) => {
    dispatch(setName(data.name));
    dispatch(setPassword(data.password));
    dispatch(setDescription(data.description));
    dispatch(setPicture(data.picture));
    dispatch(setAdmin(data.admin));
  };

  useEffect(() => {
    console.log(serverForm)
    dispatch(postServer(serverForm));
    reset()
  }, [serverForm, dispatch, reset]);

  return (
    <div className="create-server">
      <div className="create-server-header">
        <h2>Create Server</h2>
      </div>

      <form className="create-server-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <p>Name of Server</p>
          <input
            id="name"
            placeholder="Name of Server"
            name="name"
            {...register("name")}
          />
        </div>
        <div className="form-field">
          <p>Password (optional)</p>
          <input
            id="password"
            name="password"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="form-field">
          <p>Description</p>
          <textarea
            id="description"
            name="description"
            placeholder="description of server"
            {...register("description")}
          />
        </div>
        <div className="form-field">
          <p>Server Logo (optional)</p>
          <input
            id="picture"
            name="picture"
            placeholder="file type .png .jpg .jpeg"
            {...register("picture")}
          />
        </div>
        <div className="form-field">
          <p>Admin</p>
          <input
            id="admin"
            name="admin"
            placeholder="logged in userid"
            {...register("admin")}
          />
        </div>
        <button type="submit" className="form-submit">
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
};

export default CreateServer;
