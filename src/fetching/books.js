import BASE_URL from "@/lib/baseUrl";

export const deleteBook = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/books/${id}`, {
            method: "DELETE"
        })

        return response;
    } catch (error) {
        throw new error({message: error.response.message})
    }

}

export const createBook = async (params) => {

    try {
        const response = await fetch(`${BASE_URL}/books`, {
            method: "POST",
            body: JSON.stringify(params)
        })

        return response
    } catch (error) {
        throw new error({message: error.response.message})
    }    
}



export const uploadImage = async (params) => {
    try {
        const response = await fetch(`${BASE_URL}/books/upload`, {
            method: "POST",
            body: params
        });

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message || "Internal Server Error");
    }
}
