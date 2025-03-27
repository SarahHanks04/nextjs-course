// export const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// export async function GET() {
//   return Response.json(users);
// }

// export async function POST({ request }) {
//   const user = await request.json();
//   const newUser = { id: users.length + 1, name: user.name };
//   users.push(newUser);
//   return new Response(JSON.stringify(newUser), {
//     headers: { "Content-Type": "application/json" },
//     status: 201,
//   });
// }

export const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request) {
  try {
    const user = await request.json(); // Parse JSON body

    if (!user?.name) {
      return new Response(JSON.stringify({ error: "Name is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newUser = { id: users.length + 1, name: user.name };
    users.push(newUser);

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
