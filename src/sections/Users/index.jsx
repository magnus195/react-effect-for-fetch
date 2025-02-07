import {useEffect, useState} from "react";
import UsersList from "./components/UsersList.jsx";

const GITHUB_USERNAME = "magnus195";

function UsersSection() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/${GITHUB_USERNAME}/contact`)
            .then(response => response.json())
            .then(setUsers);
    }, [])
  return (
    <section>
      <h2>Users Section</h2>
        <div className="scroll-container">
            <UsersList users={users}/>
        </div>
    </section>
  )
}

export default UsersSection
