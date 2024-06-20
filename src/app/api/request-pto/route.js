// app/api/request-pto/route.js

export async function POST(req) {
  try {
    const body = await req.json();
    const { leaveType, dateStart, dateEnd, explanation } = body;
    console.log("Received PTO request:", {
      leaveType,
      dateStart,
      dateEnd,
      explanation,
    });

    // Simulate saving data to a file or database here

    return new Response(
      JSON.stringify({ message: "PTO request submitted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to process request" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}

export function GET() {
  return new Response("Method Not Allowed", {
    status: 405,
    headers: {
      Allow: "POST",
    },
  });
}
