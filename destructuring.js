const extractProfile = (user) => {
  const { name, age, city, occupation } = user;
  return { name, city };
};
const user = {
  name: "John Doe",
  age: 30,
  city: "New York",
  occupation: "Software Engineer",
};
const profile = extractProfile(user);
console.log(profile);
