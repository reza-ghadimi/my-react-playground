const baseUrl = "http://localhost:3000";

export async function getAvailablePlacesAsync() {
    const url = `${baseUrl}/places`;

    const response = await fetch(url);

    const responseData = await response.json();

    const places = responseData.places;

    return places;
}


export async function getUserSelectedPlacesAsync() {
    const url = `${baseUrl}/user-places`;

    const response = await fetch(url);

    const responseData = await response.json();

    const places = responseData.places;

    return places;
}

export async function updateUserSelectedPlacesAsync(placeIds) {
    const url = `${baseUrl}/user-places`;

    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({ placeIds }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const responseData = await response.json();

    return responseData.places;
}