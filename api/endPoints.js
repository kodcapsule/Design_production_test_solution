import axios from "axios";

// Fetch all users from the  json server
export async function fetchUsers() {
  try {
    const resp = await axios.get("http://localhost:4000/users");
    return await resp.data;
  } catch {
    throw new Error("Unable to fetch users ");
  }
}
export async function fetchUsersRoles() {
  try {
    const resp = await axios.get("http://localhost:4000/roles");
    return await resp.data;
  } catch {
    throw new Error("Unable to fetch users ");
  }
}

// fetch an individual post
// export async function fetchGroceryItem(groceryId) {
//   try {
//     const resp = await axios.get(
//       `http://localhost:4000/groceries/${groceryId}`
//     );
//     return await resp.data;
//   } catch {
//     throw new Error("Grocery Item not found ");
//   }
// }

// adding  a user
export async function addUser(user) {
  try {
    const resp = await axios.post("http://localhost:4000/users", user);
    return await resp.data;
  } catch {
    throw new Error("Failed to add User");
  }
}
export async function addUserRole(userRole) {
  try {
    const resp = await axios.post("http://localhost:4000/roles", user);
    return await resp.data;
  } catch {
    throw new Error("Failed to add User");
  }
}

// Deletes grocery item from
// export async function deleteGroceryItem(groceryId) {
//   try {
//     const resp = await axios.delete(
//       `http://localhost:4000/groceries/${groceryId}`
//     );

//     return await resp.data;
//   } catch {
//     throw new Error("Failed to delete");
//   }
// }
