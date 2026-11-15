import type { APIRoute } from "astro";
import { fetchUpcomingEvents, TicketTailorError } from "../../lib/ticket-tailor";

export const prerender = false;

const json = (body: unknown, status: number, cache: string) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": cache },
  });

export const GET: APIRoute = async () => {
  try {
    const events = await fetchUpcomingEvents();
    return json(
      { count: events.length, events },
      200,
      "public, s-maxage=300, stale-while-revalidate=3600",
    );
  } catch (err) {
    console.error("Ticket Tailor events failed:", err);
    const status = err instanceof TicketTailorError ? err.status : 500;
    return json({ error: "Events are unavailable right now" }, status, "no-store");
  }
};