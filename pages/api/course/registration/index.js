import bcryptjs from "bcryptjs";
import nc from "next-connect";
import { prisma } from "../../../../utils/db.ts";
const handler = nc();

handler.post(async (req, res) => {
  try {
    const { name, email, phone, address, newPassword } = req.body;
    const isExist = await prisma.Student.count({
      where: {
        OR: [{ phone: phone }, { email: email }],
      },
    });
    if (isExist) {
      return res.send("You have already registered.");
    }
    await prisma.Student.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: bcryptjs.hashSync(newPassword),
      },
    });
    res.send("Registration has been completed successfully!");
  } catch (error) {
    res.send(error.message);
  }
});

export default handler;
