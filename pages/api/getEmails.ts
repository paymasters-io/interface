import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({});
  } catch (error) {
    console.log({
      error,
    });

    res.status(500).json({ error });
  }
}
