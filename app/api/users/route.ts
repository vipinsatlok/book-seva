import { IUser } from "@/types";
import { NextResponse } from "next/server";


export function GET(req: Request) { }

export async function POST(req: Request) {

    const { name, number } = await req.json() as IUser

    // genrate password
    const password = Math.ceil(Math.random() * 10)

    return NextResponse.json({ name, number, password })
}


export function PUT(req: Request) { }
export function PATCH(req: Request) { }
export function DELETE(req: Request) { }