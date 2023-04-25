import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await prisma.$connect();

    const emails = await prisma.emails.findMany();

    res.status(200).json({ emails });
  } catch (error) {
    console.log({
      error,
    });

    res.status(500).json({ error });
  }
}
