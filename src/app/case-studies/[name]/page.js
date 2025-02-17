export default function page({ params }) {
  const { name } = params;

  return (
    <div>
      <h1>Post {name}</h1>
      <p>This is a dynamic route in the new Next.js 13 app directory.</p>
    </div>
  );
}
