type Key = 'placeImage';

export const createQueryKey = (key: Key) => ({
  all: () => [key] as const,
  lists: () => [...createQueryKey(key).all(), 'list'] as const,
  list: (filters?: unknown) =>
    [...createQueryKey(key).lists(), { filters }] as const,
  details: () => [...createQueryKey(key).all(), 'detail'] as const,
  detail: (id: unknown) => [...createQueryKey(key).details(), id] as const,
});

export const createMutationKey = (key: Key) => ({
  add: () => [key, 'add'] as const,
  update: (id: unknown) => [key, 'update', id] as const,
  remove: (id: unknown) => [key, 'remove', id] as const,
});
