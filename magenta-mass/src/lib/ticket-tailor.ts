const API = "https://api.tickettailor.com/v1";

export interface TicketTailorEvent {
  id: string;
  title: string;
  start?: string;
  end?: string;
  location?: string;
  url: string;
  /** Goes straight to ticket selection (skips Ticket Tailor's event page). */
  checkoutUrl: string;
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

/** Ticket Tailor sends flags as the strings "true"/"false", not booleans. */
const isTrue = (v: unknown) => String(v) === "true";

/**
 * Ticket Tailor's thumbnail is a 250×250 crop, which looks soft on our cards.
 * Their image host (Cloudinary) takes the size in the URL, so ask for an
 * 800px-wide uncropped version instead.
 */
function largerImage(url?: string): string | undefined {
  // The size step is the last transform before /v1/, e.g. `c_fill,h_250,q_85,w_250`
  // or `c_scale,h_250,q_85,w_250` (after a crop step, which we keep).
  return url?.replace(
    /\/c_(?:fill|scale),h_\d+,q_\d+,w_\d+\/(?=v1\/)/,
    "/c_limit,w_800,q_85/",
  );
}

export async function fetchUpcomingEvents(): Promise<TicketTailorEvent[]> {
  const key = process.env.TT_API_KEY;
  if (!key) throw new TicketTailorError("TT_API_KEY is not set", 500);

  const now = Math.floor(Date.now() / 1000);
  // No `status` filter here: Ticket Tailor's status values aren't a simple
  // "published" (on-sale events can be excluded by it). Drafts are dropped below.
  const res = await fetch(
    `${API}/events?start_at.gte=${now}&limit=100`,
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
    .filter((e) => e.status !== "draft" && !isTrue(e.hidden) && !isTrue(e.private))
    .map((e) => ({
      id: e.id,
      title: e.name,
      start: e.start?.iso,
      end: e.end?.iso,
      location: e.venue?.name ?? undefined,
      url: e.url,
      checkoutUrl: e.checkout_url ?? e.url,
      image: largerImage(e.images?.thumbnail ?? e.images?.header),
      // Ticket Tailor can send this as the string "true"/"false".
      ticketsAvailable:
        e.tickets_available == null
          ? undefined
          : String(e.tickets_available) !== "false",
    }))
    .sort((a, b) => (a.start ?? "").localeCompare(b.start ?? ""));
}