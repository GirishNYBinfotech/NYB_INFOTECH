function UserCard({ name, email, role }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{role}</span>
    </article>
  );
}

export default UserCard;
