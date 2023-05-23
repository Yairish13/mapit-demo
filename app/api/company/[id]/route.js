import { NextResponse } from 'next/server';
import companies from './company.json';


export const GET = async (req, { params }) => {
    try {
        console.log('triggered')
        const {id} = params;
        const company = companies.filter((comp) => comp.id === id);
        console.log(company);
        return NextResponse.json(company);
    } catch (error) {
        console.log(error);
        return NextResponse('failed to get company', { status: 500 })
    }
}
