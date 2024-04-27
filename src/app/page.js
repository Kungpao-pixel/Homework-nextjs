import prisma from "@/lib/prisma";
import BookList from "@/components/BookList";

const getData = async () => {
  try {
    const data = await prisma.books.findMany();
    console.log(data)


    return data;
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const data = await getData();
  return(
    <div className="bg-teal-950 p-20 text-white font-sans">
      <BookList books={data} />
    </div>
  )
}