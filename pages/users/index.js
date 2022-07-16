const Users = ({ users }) => {
  return users.map((item, index) => {
    return <h1 key={index}>{item.name}</h1>;
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
