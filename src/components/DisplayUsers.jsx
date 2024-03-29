import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { deleteUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const delUser = (id) =>{
    dispatch(deleteUser(id))

  }

  return (
    <Wrapper>
      <ul>
        {data.map((user, id) => (
          <li key={id}>
            {user}
            <button className="delete-btn" onClick={() => delUser()}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  ul {
    padding: 0;
    list-style: none;
    width: 100%;
  }
  
  li {
    margin-bottom: 2rem; /* Two-line gap between users */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgba(255, 0, 0, 0.2));
  }
`;

export default DisplayUsers;
