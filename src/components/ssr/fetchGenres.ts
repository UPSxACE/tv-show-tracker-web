import type { GetGenresQuery } from "@/__generated__/graphql"


export default async function fetchGenres() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/genres`, {
        next: {
            revalidate: 21600 // cache for 6 hours
        }
    })

    return await response.json() as GetGenresQuery["allGenres"]
}
