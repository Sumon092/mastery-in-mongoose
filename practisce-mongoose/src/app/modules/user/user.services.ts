import User from "./user.model";

export const createUserToDb = async () => {
  const user = await new User({
    id: "433004003",
    role: "student",
    name: {
      firstName: "Mohammad",
      middleName: "M",
      lastName: "Sayem",
    },
    dateOfBirth: "10-10-1992",
    gender: "male",
    email: "abc@gmail.com",
    contactNo: "0187266211",
    emergencyContactNO: "48934983943",
    presentAddress: "Uganda",
    permanentAddress: "Bangladesh",
  });
  await user.save();
  // console.log(user);
  return user;
};
