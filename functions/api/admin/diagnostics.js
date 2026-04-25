import { json, KEYS, listItems, requireAdmin } from '../../_utils.js';

export async function onRequest(context) {
  const sess = await requireAdmin(context);
  if (!sess) return json({ error: 'Unauthorized' }, 401);
  const items = (await listItems(context.env.TG_DATA, KEYS.diagnostics)).reverse();
  return json({ diagnostics: items });
}
