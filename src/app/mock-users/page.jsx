import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function MockUsers() {
    const authObject = await auth()
    const userObject = await currentUser()
    console.log({authObject, userObject})

  const response = await fetch(
    "https://67e574f918194932a58624d7.mockapi.io/users"
  );
  const users = await response.json();

  async function addUser(formData) {
    "use server"
    const name = formData.get("name");
    const response = await fetch(
      "https://67e574f918194932a58624d7.mockapi.io/users",
      {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json",
        //   "Authorization": `Bearer ${process.env.MOCKAPI_TOKEN}`,
        },
      }
    );
    const newUser = await response.json();
    revalidatePath("/mock-users");
    console.log("newUser", newUser);
    }
  return (
    <div className="py-10">
      <form action={addUser} className="mb-4 mx-auto">
        <input
          type="text"
          name="name"
          required
          className="border p-2 mr-4 ml-10"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Add Users
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4">
        <ul className="space-y-4 p-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
