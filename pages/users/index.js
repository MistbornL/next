import User from "../../components/user";

const Users = ({ users }) => {
  return users.map((item, index) => {
    return (
      <div key={index}>
        <User user={item} />
      </div>
    );
  });
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: { users: data },
  };
}
