import BASE_URL from "@/lib/baseUrl";
import BASE_IMAGE_URL from "@/lib/baseImageUrl";
import { NextResponse } from "next/server";

import { uploadFile } from "@/lib/uploadFile";

export const POST = async (req, { params }) => {
  try {
    const formData = await req.formData();

    const file = formData.getAll("image")[0];

    const imagePath = await uploadFile(file, "/images");

    const imageUrl = `${BASE_IMAGE_URL}/${imagePath}`;
    return NextResponse.json(
      { message: "Upload file successfully", imageUrl: imageUrl },
      { status: 200 });

  } catch (error) {
    return NextResponse.json({message: "Internal Server Error"});
  }
};
