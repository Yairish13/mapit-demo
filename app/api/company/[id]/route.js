import { NextResponse } from 'next/server';
import companies from './company.json';


export const GET = async (req, { params }) => {
    try {
        const {id} = params;
        const company = companies.filter((comp) => comp.id === id);
        return NextResponse.json(company);
    } catch (error) {
        console.log(error);
        return NextResponse('failed to get company', { status: 500 })
    }
}
