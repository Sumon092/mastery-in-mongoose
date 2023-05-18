import User from "./user.model";

const userModelToDb = async () => {
  const user = new User({
    id: "43343",
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
  console.log(user);
};
userModelToDb();
