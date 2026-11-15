const API = "https://api.tickettailor.com/v1";

export interface TicketTailorEvent {
  id: string;
  title: string;
  start?: string;
  end?: string;
  location?: string;
  url: string;
  image?: string;
  ticketsAvailable?: boolean;
}

export class TicketTailorError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}

export async function fetchUpcomingEvents(): Promise<TicketTailorEvent[]> {
  const key = process.env.TT_API_KEY;
  if (!key) throw new TicketTailorError("TT_API_KEY is not set", 500);

  const now = Math.floor(Date.now() / 1000);
  const res = await fetch(
    `${API}/events?status=published&start_at.gte=${now}&limit=100`,
    {
      headers: {
        // HTTP Basic auth: key as username, blank password
        Authorization: `Basic ${btoa(`${key}:`)}`,
        Accept: "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new TicketTailorError(`Ticket Tailor responded ${res.status}`, 502);
  }

  const body = (await res.json()) as { data?: any[] };

  return (body.data ?? [])
    .map((e) => ({
      id: e.id,
      title: e.name,
      start: e.start?.iso,
      end: e.end?.iso,
      location: e.venue?.name ?? undefined,
      url: e.url,
      image: e.images?.thumbnail ?? e.images?.header ?? undefined,
      ticketsAvailable: e.tickets_available ?? undefined,
    }))
    .sort((a, b) => (a.start ?? "").localeCompare(b.start ?? ""));
}