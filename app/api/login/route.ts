import { NextResponse } from "next/server";

export function POST(req: Request) {

    console.log(req)
    return NextResponse.json({ success: true })
}