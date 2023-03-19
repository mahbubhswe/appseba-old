import { prisma } from "../../../../utils/db.ts";
import nc from "next-connect";
import bcryptjs from "bcryptjs";
const handler = nc();

handler.put(async (req, res) => {
  try {
    const isExist = await prisma.Student.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (isExist) {
      await prisma.Student.update({
        where: {
          id: isExist.id,
        },
        data: {
          password: bcryptjs.hashSync(req.body.password),
        },
      });
      res.send("Password has been changed successfully");
    } else {
      res.send("Sorry, no account found with this email address");
    }
  } catch (error) {
    res.send(error.message);
  }
});

export default handler;
