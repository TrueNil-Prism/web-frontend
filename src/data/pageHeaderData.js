export const PAGE_HEADER = {
  "/agent-status": {
    title: "Agent Status",
    summary: "List of agents and their status summary",
  },
  "/users": {
    title: "Users List",
    summary: "List of all the users",
  },
  "/organization": {
    title: "Organization List",
    summary: "List of all the organization",
    btnList: [{ text: "Create", clickFn: "createOrg" }],
  },
  "/profile": {
    title: "Profile",
    summary:
      "Update your personal data, change password, setup multi-factor authentication mode",
  },
  "/security-dashboard": {
    title: "Security Dashboard",
    summary: "List of data and their security status",
  },
  "/control-management": {
    title: "Control Management",
    summary: "List of data and their control status",
  },
  "/audit-trail": {
    title: "Audit Trail",
    summary: "List of data and their logs",
  },
};
