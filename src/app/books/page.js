"use client";

import { useState } from "react";   
import { useRouter } from "next/navigation";
import { createBook, uploadImage } from "@/fetching/books";

export default function CreateBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [year, setYear] = useState("");
    const [pages, setPages] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const router = useRouter();

    const handleCreate = async () => {

        await createBook({title, author, publisher, year, pages, imageUrl});
        router.push("/");
        router.refresh();
    }

    const handleImageUrl = async (e) => {
        const image = e.target.files[0];
        const formData = new FormData();

        formData.append("image", image);

        const response = await uploadImage(formData);

        if(response.image_url) {
            setImageUrl(response.image_url);
    }
}    

return (
    <div className="flex justify-center items-center h-screen bg-teal-950">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md">
            <input 
                className="w-full px-3 py-2 mb-4 border rounded"
                type="text"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                className="w-full px-3 py-2 mb-4 border rounded"
                type="text"
                placeholder="Enter Author"
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input 
                className="w-full px-3 py-2 mb-4 border rounded"
                type="text"
                placeholder="Enter Publisher"
                onChange={(e) => setPublisher(e.target.value)}
            />
            <input 
                className="w-full px-3 py-2 mb-4 border rounded"
                type="text"
                placeholder="Enter Year"
                onChange={(e) => setYear(e.target.value)}
            />
            <input 
                className="w-full px-3 py-2 mb-4 border rounded"
                type="text"
                placeholder="Enter Pages"
                onChange={(e) => setPages(e.target.value)}
            />
            <input 
                className="w-full px-3 py-2 mb-4 border rounded"
                type="file"
                placeholder="Upload Image"
                onChange={(e) => handleImageUrl(e)}
            />
            <button 
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="button"
                onClick={handleCreate}
            >
                Submit
            </button>
        </form>
    </div>
)
}





