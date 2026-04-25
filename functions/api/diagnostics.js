import { appendItem, json, KEYS } from '../_utils.js';

export async function onRequestPost(context) {
  const body = await context.request.json().catch(() => null);
  if (!body?.vehicle || !body?.symptoms) return json({ error: 'Vehicle and symptoms are required.' }, 400);
  const saved = await appendItem(context.env.TG_DATA, KEYS.diagnostics, body);
  return json({ ok: true, log: saved });
}
