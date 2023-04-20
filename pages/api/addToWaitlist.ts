import { sendMail } from "libs/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, name } = req.body;

    // Add email to waitlist
    await prisma.$connect();

    const resp = await prisma.emails.create({
      data: {
        address: email,
        name,
      },
    });

    await prisma.$disconnect();

    // send email to user
    const data = await sendMail({
      email,
      subject: "Welcome to the waitlist",
      text: `Hi ${name}, thanks for joining the waitlist!`,
      name,
    });

    // console.log({ data });

    if (!data.success) {
      throw data.err;
    }

    res.status(200).json(data);
  } catch (error) {
    console.log({
      error,
    });

    res.status(500).json({ error });
  }
}
