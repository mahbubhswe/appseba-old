import nc from "next-connect";
import bcryptjs from "bcryptjs";
import { prisma } from "../../../../utils/db";
import { studentSignToken } from "../../../../utils/auth.js";
const handler = nc();
handler.post(async (req, res, next) => {
  try {
    const student = await prisma.Student.findUnique({
      where: { email: req.body.email },
    });

    if (student && bcryptjs.compareSync(req.body.password, student.password)) {
      const token = studentSignToken(student);
      res.send({
        token,
        name: student.name,
        phone: student.phone,
        email: student.email,
        address: student.address,
        paidAmount: student.paidAmount,
        createdAt: student.createdAt,
      });
    } else if (student) {
      res.send("Invalid email or password");
    } else {
      res.send("Sorry, no account exists with this email address");
    }
  } catch (error) {
    res.send(error.message);
  }
});

export default handler;
