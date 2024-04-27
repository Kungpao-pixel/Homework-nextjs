"use client";
import Link from "next/link";
import { deleteBook } from "@/fetching/books";
import { useRouter } from "next/navigation";
const BookList = ({ books }) => {

    const router = useRouter();

    const handleDelete = async (id) => {

        await deleteBook(id) 
        router.refresh()
    }

  return (
    <>
      <Link href={"/books"} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">CREATE BOOK</Link>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Publisher</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pages</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image URL</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.year}</td>
                <td>{book.pages}</td>
                <td><a href={book.imageUrl}>{book.imageUrl}</a></td>
                <td><button type="button" onClick={(e) => handle(book.id)} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">DELETE</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BookList;
