export type FormType = "solo" | "duo" | "group";

export interface FieldConfig {
  name: string;
  label: string;
}

export interface EventFormConfig {
  title: string;
  fields: FieldConfig[];
  note: string;
}

export const eventFormConfig: Record<FormType, EventFormConfig> = {
  solo: {
    title: "Solo Event Registration",
    fields: [
      { name: "name", label: "Name" },
      { name: "college", label: "College" },
      { name: "department", label: "Department" },
      { name: "email", label: "Email" },
      { name: "phone", label: "Phone Number" },
      { name: "year", label: "Academic Year" },
      { name: "transactionId", label: "Transaction ID" },
    ],
    note: "NO REFUND WILL BE PROVIDED",
  },

  duo: {
    title: "Duo Event Registration",
    fields: [
      { name: "teamName", label: "Team Name" },
      { name: "leaderName", label: "Team Leader Name" },
      { name: "leaderEmail", label: "Team Leader Email" },
      { name: "leaderPhone", label: "Team Leader Phone" },
      { name: "memberName", label: "Team Member Name" },
      { name: "memberEmail", label: "Team Member Email" },
      { name: "memberPhone", label: "Team Member Phone" },
      { name: "college", label: "College" },
      { name: "department", label: "Department" },
      { name: "year", label: "Academic Year" },
      { name: "transactionId", label: "Transaction ID" },
    ],
    note: "NO REFUND WILL BE PROVIDED",
  },

  group: {
    title: "Group Event Registration",
    fields: [
      { name: "teamName", label: "Team Name" },
      { name: "leaderName", label: "Team Leader Name" },
      { name: "leaderPhone", label: "Team Leader Phone" },
      { name: "leaderEmail", label: "Team Leader Email" },

      { name: "member1", label: "Team Member 1 Name" },
      { name: "member2", label: "Team Member 2 Name" },
      { name: "member3", label: "Team Member 3 Name" },
      { name: "member4", label: "Team Member 4 Name" },
      { name: "member5", label: "Team Member 5 Name" },
      { name: "member6", label: "Team Member 6 Name" },
      { name: "member7", label: "Team Member 7 Name" },
      { name: "member8", label: "Team Member 8 Name" },

      { name: "alternatePhone", label: "Alternate Phone Number" },
      { name: "alternateEmail", label: "Alternate Email" },

      { name: "college", label: "College" },
      { name: "department", label: "Department" },
      { name: "year", label: "Academic Year" },
      { name: "transactionId", label: "Transaction ID" },
    ],
    note: "NO REFUND WILL BE PROVIDED",
  },
};
