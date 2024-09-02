import axios from 'axios';

export default async function getPlanets() {
    let total = 0;
    let pageNum = 1;
    let totalData: any = [];
    try {
        const response = await axios.get(`https://swapi.dev/api/planets/?page=${pageNum}`);
        if (pageNum === 1) {
            total = response.data.count;
        }
        while (totalData.length < total) {
            const response = await axios.get(`https://swapi.dev/api/planets/?page=${pageNum}`);
            totalData = totalData.concat(response.data.results);
            pageNum++;
        }
        return totalData;
    } catch (error: any) {
        console.error(`Error getting planets: ${error.message}`);
        throw error;
    }
}

export async function getResidents(residents:any[]) {
    let currentResidents: any[] = [];
    try {
        for (const resident of residents) {
        const response = await axios.get(resident);
        currentResidents.push(response.data);
        }
        return currentResidents;
    } catch (error: any) {
        console.error(`Error fetching residents: ${error.message}`);
        throw error;
    }
}