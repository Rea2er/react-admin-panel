const menuList = [
  { title: "Home", key: "/home", icon: "home" },
  {
    title: "Items",
    key: "/items",
    icon: "home",
    children: [
      { title: "Categories", key: "/categories", icon: "home" },
      { title: "Products", key: "/products", icon: "home" },
    ],
  },
  { title: "Users", key: "/users", icon: "home" },
  { title: "Roles", key: "/roles", icon: "home" },
  {
    title: "Charts",
    key: "/charts",
    icon: "home",
    children: [
      { title: "Line", key: "/line", icon: "home" },
      { title: "Bar", key: "/bar", icon: "home" },
      { title: "Pie", key: "/pie", icon: "home" },
    ],
  },
];

export default menuList;
