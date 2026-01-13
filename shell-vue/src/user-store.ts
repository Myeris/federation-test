import { reactive } from "vue";

export interface UserProfile {
  name: string;
  role: string;
}

export const userProfile = reactive<UserProfile>({
  name: "Alice Smith",
  role: "Administrator"
});

export function toggleUser() {
  if (userProfile.name === "Alice Smith") {
    userProfile.name = "Bob Jones";
    userProfile.role = "Developer";
  } else {
    userProfile.name = "Alice Smith";
    userProfile.role = "Administrator";
  }
}
